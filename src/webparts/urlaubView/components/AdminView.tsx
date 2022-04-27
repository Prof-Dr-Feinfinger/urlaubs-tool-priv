import * as React from "react";
import { IAdminViewProps } from "./IAdminViewProps";
import { DatePicker, Checkbox, PrimaryButton, ITextFieldStyles, DetailsList, DetailsListLayoutMode, Selection, Persona, PersonaSize, Text } from 'office-ui-fabric-react'
import { useGetUserDaysList } from '../hooks/useMsClient.js'
import * as strings from "UrlaubViewWebPartStrings";

const columns = [
    { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
];

const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '300px' } };


const items = [{ key: 'column1', name: 'test', value: "Hallo" }, { key: 'column2', name: 'test2', value: "Hallo" }]


function validate({ from, to, setIsHalfDay }) {

}


export interface IDetailsListCompactExampleItem {
    key: number;
    name: string;
    value: number;
}

export interface IDetailsListCompactExampleState {
    items: IDetailsListCompactExampleItem[];
    selectionDetails: string;
}

const UserPersona = () => {
    const [renderDetails, updateRenderDetails] = React.useState(true);
    const onChange = (ev: unknown, checked: boolean | undefined) => {
        updateRenderDetails(!!checked);
    };

    return (
        <Persona
            showUnknownPersonaCoin={true}
            text="Kat Larrson"
            secondaryText="Designer"
            tertiaryText="Unverified sender"
            size={PersonaSize.size72}
            imageUrl={"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png"}
            imageAlt="Kat Larrson, status unknown"
        />
    )
}




const AdminView: React.FunctionComponent<IAdminViewProps> = (props) => {
    const [from, setFrom] = React.useState<Date | undefined>(new Date());
    const [to, setTo] = React.useState<Date | undefined>(new Date());
    const [isHalfDay, setIsHalfDay] = React.useState<boolean>(false)

    const getSelectionDetails = () => {
        const selectionCount = selection.getSelectedCount();

        switch (selectionCount) {
            case 0:
                return 'No items selected';
            case 1:
                return '1 item selected: ' + (selection.getSelection()[0] as IDetailsListCompactExampleItem).name;
            default:
                return `${selectionCount} items selected`;
        }
    }


    const [selection, setSelected] = React.useState<Selection>(new Selection({
        onSelectionChanged: () => setSelected({ selectionDetails: getSelectionDetails() })
    }))





    function onSubmit() {
        validate({ from, to, setIsHalfDay })
    }
    console.log(selection)
    return (
        <>
            <UserPersona />
            <Text >{`Urlaubsanspruch (in Tagen): ${10}`} </Text>
            <Text >{`Anzahl genommer Urlaubstage : ${10}`} </Text>
            <Text >{`Anzahl der zu Beantragenden Tage des beantragten Urlaubs : ${10}`} </Text>
            <br />

            <DatePicker isRequired value={from} onSelectDate={setFrom as (date: Date | null | undefined) => void} label="Von" />
            <DatePicker isRequired value={to} onSelectDate={setTo as (date: Date | null | undefined) => void} label="Bis" />

            <br />
            <Checkbox checked={isHalfDay} onChange={() => setIsHalfDay((prev) => !prev)} label="Halber Tag" />
            <br />

            <PrimaryButton text="Absenden" />

            <DetailsList
                items={items}
                columns={columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.justified}
                selection={selection}
                selectionPreservedOnEmptyClick={true}
                ariaLabelForSelectionColumn="Toggle selection"
                ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                checkButtonAriaLabel="select row"
                onItemInvoked={(e) => console.log(e)}

            />
            <PrimaryButton text="Löschen" />
        </>
    )
}


export default AdminView
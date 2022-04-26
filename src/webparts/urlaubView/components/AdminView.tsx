import * as React from "react";
import { IAdminViewProps } from "./IAdminViewProps";
import { DatePicker, Checkbox, PrimaryButton, ITextFieldStyles, DetailsList, DetailsListLayoutMode, Selection, IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react'
import { useGetUserDaysList } from '../hooks/useMsClient.js'
import * as strings from "UrlaubViewWebPartStrings";

const columns = [
    { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
];

const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '300px' } };


const items = []


function validate({ from, to, setIsHalfDay }) {

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



    function onSubmit() {
        validate({ from, to, setIsHalfDay })
    }



    return (
        <>
            <UserPersona />
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
                selection={new Selection}
                selectionPreservedOnEmptyClick={true}
                ariaLabelForSelectionColumn="Toggle selection"
                ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                checkButtonAriaLabel="select row"
                onItemInvoked={() => console.log("Item wurde ausgewählt")}
            />
            <PrimaryButton text="Löschen" />
        </>
    )
}


export default AdminView
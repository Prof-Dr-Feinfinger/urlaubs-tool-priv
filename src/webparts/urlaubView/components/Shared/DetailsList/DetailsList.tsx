import { IDetailsListProps } from './IDetailsListProps'
import * as React from "react";

import { DetailsList as ODetailsList, DetailsListLayoutMode as ODetailsListLayoutMode, PrimaryButton, Selection, } from 'office-ui-fabric-react'
import { useGetUserDaysList } from '../../../hooks/useMsClient';


export interface IDetailsListCompactExampleItem {
    key: number;
    von: string;
    to: number;
    urlaubs_tage_anzahl: number;
    user_name: string;
    status: string;
}

export interface IDetailsListCompactExampleState {
    items: IDetailsListCompactExampleItem[];
    selectionDetails: string;
}


const items = [{ key: 1, status: "Genehmigt", von: new Date('04/02/2022').toLocaleDateString(), to: new Date('04/08/2022').toLocaleDateString(), user_name: "Mathias Johann", urlaubs_tage_anzahl: 5 }, { key: 2, status: "Genehmigt", von: new Date('04/11/2022').toLocaleDateString(), to: new Date('04/15/2022').toLocaleDateString(), user_name: "Mathias Johann", urlaubs_tage_anzahl: 5 }]

const columns = [
    { key: 'column1', name: 'Von', fieldName: 'von', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'Bis', fieldName: 'to', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column3', name: 'Mitarbeiter', fieldName: 'user_name', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column4', name: 'In Tagen', fieldName: 'urlaubs_tage_anzahl', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column4', name: 'Status', fieldName: 'status', minWidth: 100, maxWidth: 200, isResizable: true },
];


const DetailsList: React.FunctionComponent<IDetailsListProps> = (props) => {
    const [{ error, data, loading }, getUserDaysList] = useGetUserDaysList()
    const [selection, setSelected] = React.useState<Selection>(new Selection({
        onSelectionChanged: () => setSelected({ selectionDetails: getSelectionDetails() })
    }))



    React.useEffect(() => {
        getUserDaysList(props.client)
    }, [])

    const getSelectionDetails = () => {
        const selectionCount = selection.getSelectedCount();

        switch (selectionCount) {
            case 0:
                return 'No items selected';
            case 1:
                return '1 item selected: ' + (selection.getSelection()[0] as IDetailsListCompactExampleItem).user_name;
            default:
                return `${selectionCount} items selected`;
        }
    }
    console.log({ error, data, loading })
    return (<>
        <ODetailsList
            items={items}
            columns={columns}
            setKey="set"
            layoutMode={ODetailsListLayoutMode.justified}
            selection={selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="select row"
            onItemInvoked={(e) => console.log(e)}
        />
        {null && <PrimaryButton text="Löschen" />}
        {null && <PrimaryButton text="Genehmigen" />}
        {null && <PrimaryButton text="Ablehnen" />}

    </>)
}


export default DetailsList
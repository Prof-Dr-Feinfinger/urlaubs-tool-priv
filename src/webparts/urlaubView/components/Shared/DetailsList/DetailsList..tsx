import { IDetailsListProps } from './IDetailsListProps'
import * as React from "react";

import { DetailsList as ODetailsList, DetailsListLayoutMode as ODetailsListLayoutMode, PrimaryButton, Selection, } from 'office-ui-fabric-react'



export interface IDetailsListCompactExampleItem {
    key: number;
    name: string;
    value: number;
}

export interface IDetailsListCompactExampleState {
    items: IDetailsListCompactExampleItem[];
    selectionDetails: string;
}


const items = [{ key: 'column1', name: 'test', value: "Hallo" }, { key: 'column2', name: 'test2', value: "Hallo" }]

const columns = [
    { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
];


const DetailsList: React.FunctionComponent<IDetailsListProps> = (props) => {
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



    const items = []
    const columns = []
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
        <PrimaryButton text="Löschen" />
    </>)
}


export default DetailsList
import * as React from "react";
import { IAdminViewProps } from "./IAdminViewProps";
import { Text } from 'office-ui-fabric-react'
import CalculateRemainingHolidays from '../CalculateRemainingHolidays'
import Persona from '../Shared/Persona/Persona'
import HolidaysFrom from '../Shared/HolidaysForm/HolidaysForm'
import DetailsList from './../Shared/DetailsList/DetailsList'

const AdminView: React.FunctionComponent<IAdminViewProps> = (props) => {
    return (
        <>
            <Persona client={props.client} />
            <br />
            <HolidaysFrom client={props.client} />
            <DetailsList client={props.client} />
        </>
    )
}


export default AdminView
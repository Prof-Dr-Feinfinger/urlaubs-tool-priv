import * as React from "react";
import { IAdminViewProps } from "./IAdminViewProps";
import { DatePicker, Checkbox, PrimaryButton, ITextFieldStyles, DetailsList, DetailsListLayoutMode, Selection, Text } from 'office-ui-fabric-react'
import * as strings from "UrlaubViewWebPartStrings";
import CalculateRemainingHolidays from '../CalculateRemainingHolidays'
import Persona from './../Shared/Persona/Persona'
import { useGetMe } from '../../hooks/useMsClient.js'



const AdminView: React.FunctionComponent<IAdminViewProps> = (props) => {
    const [from, setFrom] = React.useState<Date | undefined>(new Date());
    const [to, setTo] = React.useState<Date | undefined>(new Date());
    const [isHalfDay, setIsHalfDay] = React.useState<boolean>(false)






    return (
        <>
            {props.client && <Persona client={props.client} />}
            <Text >{`Urlaubsanspruch (in Tagen): ${4}`} </Text>

            <CalculateRemainingHolidays totalHolidays={5} takenHolidays={1} label={"Rest Urlaub"} />
            <Text >{`Anzahl der zu Beantragenden Tage des beantragten Urlaubs : ${0}`} </Text>
            <br />



            <DatePicker isRequired value={from} onSelectDate={setFrom as (date: Date | null | undefined) => void} label="Von" />
            <DatePicker minDate={new Date(from.toDateString())} isRequired value={to} onSelectDate={setTo as (date: Date | null | undefined) => void} label="Bis" />

            <br />
            {(from.getDate() === to.getDate()) && <Checkbox checked={isHalfDay} onChange={() => setIsHalfDay((prev) => !prev)} label="Halber Tag" />}
            <br />

            <PrimaryButton text="Absenden" />


        </>
    )
}


export default AdminView
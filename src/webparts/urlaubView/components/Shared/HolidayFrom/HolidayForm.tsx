import { IHolidayFormProps } from "./IHolidayFormProps";
import { DatePicker, Checkbox, PrimaryButton, ITextFieldStyles, DetailsList, DetailsListLayoutMode, Selection, Text } from 'office-ui-fabric-react'
import * as React from "react";

const HolidayForm: React.FunctionComponent<IHolidayFormProps> = (props) => {
    const [from, setFrom] = React.useState<Date | undefined>(new Date());
    const [to, setTo] = React.useState<Date | undefined>(new Date());
    const [isHalfDay, setIsHalfDay] = React.useState<boolean>(false)


    return (
        <>
            <DatePicker isRequired value={from} onSelectDate={setFrom as (date: Date | null | undefined) => void} label="Von" />
            <DatePicker minDate={new Date(from.toDateString())} isRequired value={to} onSelectDate={setTo as (date: Date | null | undefined) => void} label="Bis" />

            <br />
            {(from.getDate() === to.getDate()) && <Checkbox checked={isHalfDay} onChange={() => setIsHalfDay((prev) => !prev)} label="Halber Tag" />}
            <br />

            <PrimaryButton text="Absenden" />
        </>
    )
}


export default HolidayForm
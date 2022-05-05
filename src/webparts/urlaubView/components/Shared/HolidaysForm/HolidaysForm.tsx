import { IHolidaysFormProps } from "./IHolidaysFormProps";
import { DatePicker, Checkbox, PrimaryButton, IDatePickerStrings, Text } from 'office-ui-fabric-react'
import * as React from "react";
//import { Dayjs } from 'dayjs'
import { calculateTakenHolidays } from '../../../hooks/CalculateHolidaysCount'





const DayPickerStrings = {
    months: [
        'Januar',
        'Februar',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember'
    ],

    shortMonths: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mai',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Okt',
        'Nov',
        'Dez'
    ],

    days: [
        'Samstag',
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag'
    ],

    shortDays: [
        'S',
        'M',
        'D',
        'M',
        'D',
        'F',
        'S'
    ],

    goToToday: 'Go to today'
};


import { useGetHolidaysListForBranchOffice } from "../../../hooks/useMsClient";
const HolidaysForm: React.FunctionComponent<IHolidaysFormProps> = (props) => {
    const [from, setFrom] = React.useState<Date | undefined>(undefined);
    const [to, setTo] = React.useState<Date | undefined>(undefined);
    const [daysCount, setDaysCount] = React.useState<Number>(0);
    const [isHalfDay, setIsHalfDay] = React.useState<boolean>(false)
    const [{ error, data, loading }, getHolidaysListForBranchOffice] = useGetHolidaysListForBranchOffice("Friedrichsthal")
    React.useEffect(() => {
        getHolidaysListForBranchOffice(props.client)
    }, [])

    React.useEffect(() => {
        const count = calculateTakenHolidays(from, to, [new Date('05/06/2022')])
        if (count != daysCount) setDaysCount(() => count)
    }, [from, to])


    return (
        <>
            <Text>{`${daysCount}`}</Text>
            <DatePicker
                formatDate={(d) => d.toLocaleDateString()}
                isRequired value={from}
                onSelectDate={setFrom as (date: Date | null | undefined) => void}
                label="Von"
            />
            <DatePicker

                formatDate={(d) => d.toLocaleDateString()}
                minDate={from}
                isRequired value={to}
                onSelectDate={setTo as (date: Date | null | undefined) => void} label="Bis"
            />

            {/* <br />
            {(from.getDate() === to.getDate()) && <Checkbox checked={isHalfDay} onChange={() => setIsHalfDay((prev) => !prev)} label="Halber Tag" />} */}
            <br />

            <PrimaryButton text="Absenden" />
        </>
    )
}


export default HolidaysForm
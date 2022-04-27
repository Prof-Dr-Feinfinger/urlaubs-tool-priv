import * as React from "react";
import { ICalculateRemainingHolidaysProps } from "./ICalculateRemainingHolidayProps";
import { Text } from 'office-ui-fabric-react'





const CalculateRemainingHolidays: React.FunctionComponent<ICalculateRemainingHolidaysProps> = (props) => {
    return (
        <Text>{`${props.label} : ${props.totalHolidays - props.takenHolidays}`}</Text>
    )
}


export default CalculateRemainingHolidays
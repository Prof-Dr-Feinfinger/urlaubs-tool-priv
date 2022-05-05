import { some } from "lodash";


const getAllDaysInInterval = (from, to) => {
    let days = []
    if (!from) return [];
    if (!to) return [];
    const start = new Date(from.getTime());
    const end = new Date(to.getTime());
    for (const day: Date = start; day <= end; day.setDate(day.getDate() + 1)) {
        days.push(new Date(day.getTime()))
    }
    return [...days]
}

const one_day_plus = (date) => {
    const tmp = new Date(date.getTime())
    tmp.setDate(tmp.getDate() + 1);
    return tmp
}

const getIntervall = (start, end, intervall) => {
    if (start <= end) {
        return getIntervall(one_day_plus(start), end, [...intervall, new Date(start.getTime())])
    }
    return [...intervall]
}


const filterSundaysAndSaturdays = (days) => days.filter(day => !(day.getDay() >= 6 || day.getDay() == 0))

const filterDays = (days, days_to_exclude) => days.filter(d => !days_to_exclude.some((d_ex) => d.getTime() == d_ex.getTime()))

const customFilter = (days, days_to_exclude) => filterSundaysAndSaturdays(filterDays(days, days_to_exclude))


const filters = [

]








const calculateTakenHolidays = (from: Date, to: Date, free_days: Array<Date>): Number => {
    if (!from) return 0
    if (!to) return 0
    // let count: number = 0
    const start = new Date(from.getTime());
    const end = new Date(to.getTime());
    const excluded_days = [...free_days]

    // for (const date: Date = start; date <= end; date.setDate(date.getDate() + 1)) {
    //     if (date.getDay() < 6) {
    //         if (excluded_days.length === 0) {
    //             count++
    //         } else {
    //             for (let excluded_day of excluded_days) {
    //                 if (excluded_day.getTime() !== date.getTime()) {
    //                     count++;
    //                 }
    //             }
    //         }
    //     }
    // }
    const all_days = getAllDaysInInterval(start, end)
    return customFilter(all_days, excluded_days).length
}


export { calculateTakenHolidays }
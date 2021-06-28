import React from "react";
import "./month.css"
import { DaysOfWeek } from "../index"

export function Month({year, month}) {
    const date = new Date(year, month);
    const monthName = date.toLocaleString("en", {month: "long"});
    const days = {
        arrDaysInMonth: [],
        arrDaysInPrevMonth: [],
        arrDaysInNextMonth: [],
    };

    const cellsCount = 42;

    const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
    let daysInPrevMonth = new Date(year, month, 0).getDate();

    for (let i = 1; i <= daysInCurrentMonth; i = i + 1) {
        days.arrDaysInMonth.push(i);
    }
    
    let firstDayInMonth = new Date(year, month, 1).getDay();
    while(firstDayInMonth > 0) {
        days.arrDaysInPrevMonth.unshift(daysInPrevMonth);
        firstDayInMonth = firstDayInMonth - 1;
        daysInPrevMonth = daysInPrevMonth - 1;
    }

    const daysInNextMonth = cellsCount - days.arrDaysInMonth.length - days.arrDaysInPrevMonth.length;
    
    for (let j = 1; j <= daysInNextMonth; j = j + 1) {
        days.arrDaysInNextMonth.push(j);
    }
    
    return (
        <div className="month">
            <div className="monthName">{monthName}</div>
            <div className="day-list">
                <DaysOfWeek />
                    {days.arrDaysInPrevMonth.map((day) => {
                    return <div className="cell not-current-month">{day}</div>;
                    })}
                    {days.arrDaysInMonth.map((day) => {
                    return <div className="cell current-month">{day}</div>;
                    })}
                    {days.arrDaysInNextMonth.map((day) => {
                    return <div className="cell not-current-month">{day}</div>;
                    })}
            </div>
        </div>
    );
}
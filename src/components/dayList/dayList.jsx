import React from "react";
import { Link } from "react-router-dom";
import { Day } from "../index";
import "./dayList.css";

export function DayList({day, year, month}) {
    
    const days = {
        arrDaysInMonth: [],
        arrDaysInPrevMonth: [],
        arrDaysInNextMonth: [],
    };

    const cellsCount = 42;

    const daysInCurrentMonth = new Date(year, month, 0).getDate();
    let daysInPrevMonth = new Date(year, month -1, 0).getDate();

    for (let i = 1; i <= daysInCurrentMonth; i = i + 1) {
        days.arrDaysInMonth.push(i);
    }
    
    let firstDayInMonth = new Date(year, month -1, 1).getDay();
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
        <div className="day-list">
            {days.arrDaysInPrevMonth.map((day, index) => {
                return (
                <Link to={'/'}>
                    <Day year={year} month={month} day={day}></Day>
                </Link>
                );
            })}

            {days.arrDaysInMonth.map((day, index) => {
                return (
                <Link to={`/year/${year}/month/${month}/day/${day}`}>
                    <Day position={"current"} year={year} month={month} day={day}></Day>
                </Link>
                );
            })}

            {days.arrDaysInNextMonth.map((day, index) => {
                return (
                <Link to={'/'}>
                    <Day year={year} month={month} day={day}></Day>
                </Link>
                );
            })}

        </div>
    );
}
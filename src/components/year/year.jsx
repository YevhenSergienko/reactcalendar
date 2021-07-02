import React from "react";
import { Month } from "../index";
import "./year.css"

export function Year(props) {

    const {year, onYearChange} = props;
    const months = [];

    for (let i = 0; i < 12; i = i + 1) {
    months.push(i);
    }

    return (
    <div>
        <div className="year">
        <button onClick={() => {onYearChange(Number(year) - 1)}}>prev</button>
        <div>{year}</div>
        <button onClick={() => {onYearChange(Number(year) + 1)}}>next</button>
        </div>

        <div className ="month-list">
        {months.map((month) => {
            return  <Month year={Number(year)} key={month + 1} month={month + 1}></Month>
        })}
        </div>
    </div>
    );
};
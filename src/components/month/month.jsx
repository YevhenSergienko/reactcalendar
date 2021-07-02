import React from "react";
import { Link } from "react-router-dom";
import { DaysOfWeek } from "../index";
import { DayList } from "../index";
import "./month.css";


export const Month = function({year, month}) {
  const date = new Date(year, month - 1);
  const monthName = date.toLocaleString("en", {month: "long"});

  return (
    <div className="month">
      <Link to={`${year}/month/${month}`}>
        <div className="monthName">{monthName}</div>
      </Link>
      <DaysOfWeek />
      <DayList year={year} month={month}></DayList>
    </div>
  );
}
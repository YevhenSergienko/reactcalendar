import {createDaysOfWeek } from "../index"
import "./daysOfWeek.css"

export function DaysOfWeek() {
  const days = createDaysOfWeek();
  return (
    <div className="daysOfWeek">
      {days.map((day, index) => {
        return <div key={index}>{day}</div>
      })}
    </div>
  );
}
import React from "react";
import Year from "./year";
import Month from "./month";
import Day from "./day";
import "../index.css"

export default function App () {
  const [isYear, setYear] = React.useState(2021)

  const prevYear = function() {
    setYear(isYear - 1);
  }
  const nextYear = function() {
    setYear(isYear + 1);
  }
  const date = new Date(isYear, 10, 10);
  const month = date.toLocaleString('default', { month: 'long' });

  return (
    <div className="app">
      <Year
      number={isYear}
      onPrevClick={prevYear}
      onNextClick={nextYear}
      />
      <Month
      number={month}
      />
      <Day
      number={10}
      />
    </div>
  );
}


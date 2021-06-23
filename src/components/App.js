import React from "react";
import Year from "./year";
import Month from "./month";
import Day from "./day";
import "../index.css"

function App () {
  const date = new Date();
  const currentYear = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const [selectedYear, setYear] = React.useState(currentYear)

  const  handleYearChange = function(yearNumber) {
    setYear(yearNumber);
  }
  

  return (
    <div className="app">
      <Year
      number={selectedYear}
      onYearChange={handleYearChange}
      />
      <Month
      number={month}
      />
      <Day
      number={day}
      />
    </div>
  );
}

export default App;

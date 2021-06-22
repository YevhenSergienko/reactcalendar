import React from "react";
import Year from "./year";
import Month from "./month";
import Day from "./day";
import "../index.css"

function App () {
  const [isYear, setYear] = React.useState(2021)

  const  handleYearChange = function(yearNumber) {
    setYear(yearNumber);
  }
  
  const date = new Date(isYear, 10, 10);
  const month = date.toLocaleString('default', { month: 'long' });

  return (
    <div className="app">
      <Year
      number={isYear}
      onYearChange={handleYearChange}
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

export default App;

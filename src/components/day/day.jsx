import "./day.css";

export function Day({position, year, month, day}) {
  
  const today = new Date();
  
  if(position === "current") {
    
    if(today.getFullYear() === Number(year) &&
      today.getMonth() === Number(month - 1) &&
      today.getDate() === Number(day)) {
      
        return (
        <div className={"cell today"}>{day}</div>
      )
    }
    
    return (
      <div className={"cell current-month"}>{day}</div>
    )
  
  } else {
    
    return (
      <div className={"cell not-current-month"}>{day}</div>
    )
  }
}
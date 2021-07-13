import { useContext } from "react";
import { NotesContext } from "../index";
import "./day.css";
import { getDateId } from "../../tools/dayTools"

export function Day({position, year, month, day}) {
  const notes = useContext(NotesContext);
  const today = new Date();
  
  let note ='';
  try {
    const date = getDateId(year, month, day);
    note = notes[date];
  } catch {}
  
  if(position === "current") {
    
    if(today.getFullYear() === Number(year) &&
      today.getMonth() === Number(month - 1) &&
      today.getDate() === Number(day)) {
      
        return (
        <div className={"cell today"}>{day}</div>
      )
    }
    
    if(note) {
      return (
        <div className={"cell note"}>{day}</div>
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
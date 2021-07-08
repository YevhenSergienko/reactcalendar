import { Month } from "../index";
import "./monthPage.css"

export function MonthPage(props) {

    return (
      <div>
        <div className="month-changer">
          <button onClick={() => {props.onMonthChange((props.month) - 1)}}>prev</button>
          <button onClick={() => {props.onMonthChange((props.month) + 1)}}>next</button>
        </div>
        <div className="single-month">
          <Month year={props.year} month={props.month} ></Month>
        </div>
      </div>
    );
}
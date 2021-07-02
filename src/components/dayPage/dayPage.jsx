import "./dayPage.css";

export const DayPage = function(props) {
    const date = new Date(props.year, props.month - 1, props.day);
    const dateText = date.toLocaleDateString();

    return (
      <div>
        <div className="day">{dateText}</div>
        <textarea className="notice"></textarea>
      </div>
    );
}
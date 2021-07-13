import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { NotesContext } from '../../tools/notesProvider';
import { notesManager } from '../../model/notesManager';
import { getDateId } from '../../tools/dayTools';
import "./dayPage.css";

export function DayPage(props) {
    const date = new Date(props.year, props.month - 1, props.day);
    const dateLabel = date.toLocaleDateString();
    const notes = useContext(NotesContext);
    const note = notes[getDateId(props.year, props.month, props.day)];

    const[memo, setMemo] = useState(note);
    

    function handleChangeMemo ({target: {value} } ) {
     setMemo(value);
    }

    function handleBtnClick() {
      const dateId = getDateId(props.year, props.month, props.day)
      notesManager.updateNote(dateId, memo)
       }

    return (
      <div>
        <div className="day">{dateLabel}</div>
        <textarea className="notice" onChange={handleChangeMemo} value={memo}/>
        <Link to='/'>
          <button className="btn" onClick={handleBtnClick}>SAVE</button>
        </Link>
      </div>
    );
}
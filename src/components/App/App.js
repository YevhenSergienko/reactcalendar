import React, { useEffect, useState } from 'react';
import {
  Switch, Route, useHistory, Redirect,
} from "react-router-dom";
import { DayPage, Year, MonthPage, NotesContext } from '../index';
import { notesManager } from '../../model/notesManager'
import './App.css';

export function App() {
  const history = useHistory();

  const handleYearChange = function (yearNumber) {
    history.push(`/year/${yearNumber}`);
  };

  const handleMonthChange = function (monthNumber) {
    history.push(`${monthNumber}`);
  };

  const [notes, setNotes] = useState({});


  useEffect(() => {
    console.log('Load from the Local Storage');
    
    notesManager.addEventListener('update', () => {
      setNotes(notesManager.notes);
    })
    setNotes(notesManager.notes);
  }, [])

  return (
    <NotesContext.Provider value={notes}>
      <div className="app">
        <Switch>

        <Route path="/year/:yearNumber/month/:monthNumber/day/:day" render={({match}) => (
          <DayPage 
          year={match.params.yearNumber}
          month={match.params.monthNumber}
          day={match.params.day}/>
          )}/>

        <Route path="/year/:yearNumber/month/:monthNumber" render={({ match }) => (
          <MonthPage
            year={Number(match.params.yearNumber)} 
            month={Number(match.params.monthNumber)} 
            onMonthChange={handleMonthChange}/>
          )}/>
          
          <Route path="/year/:yearNumber" render={(props) => (
            <Year 
            year={props.match.params.yearNumber} 
            onYearChange={handleYearChange} />
          )}/>

          <Route path="/today">
            <Redirect to={`/year/${new Date().getFullYear()}/month/${new Date().getMonth()}/day/${new Date().getDate()}`} />
          </Route>

          <Route path="/">
            <Redirect to={`/year/${new Date().getFullYear()}`}/>
          </Route>

        </Switch>
      </div>
    </NotesContext.Provider>
  );
}
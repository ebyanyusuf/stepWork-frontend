import React, {useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import AddToCalendar from 'react-add-to-calendar';

function MeetingCalendar() {
  const [dateState, setDateState] = useState(new Date())
    //Change Date Method 
const changeDate = (e) => {
    setDateState(e)
  }

  
//Calendar Tag
 
 return (
    <div className="calendar">
      <h1>My Meeting Calendar</h1>
      
          <Calendar 
   value={dateState}
   onChange={changeDate}
 />
 <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
 <AddToCalendar />
          
    </div>
  );
}

export default MeetingCalendar;
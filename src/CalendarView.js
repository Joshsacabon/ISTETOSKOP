import React, {useState} from 'react'
import Calendar from 'react-calendar'
import './Calendarlist.css';
import moment from 'moment'

export const CalendarView = () => {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <div>
      <Calendar 
      value={dateState}
      onChange={changeDate}
      style={{
        width: '100%'
      }}
      />
      <br/>
    <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>

    <div className="row">
      <div className="col-6 ">
        <div className="dashboardtext"> Today's Schedule <button class="plusbutton">+</button> </div> 
      </div>
      <div className="col-6">
        <div className="dashboardtext" style={{ float:'right'}}> Upcoming Schedules </div> 
      </div>

    </div>
    
  </div>
  )
}


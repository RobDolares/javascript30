import React from 'react';
import {Link} from 'react-router-dom';
import data from './days/data';
import DayItem from './DayItem';



const DayList = ({onDaySelect}) => {

  const renderedDays = data.public.map((day) => {
    return (
      <DayItem onDaySelect={onDaySelect} key={day.title} day={day}>{day}</DayItem>
    )
  })



  return (
      <div className="ui segment">
        {renderedDays}
      </div>
  )
}

export default DayList;

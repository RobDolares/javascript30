import React from 'react';
import {Link} from 'react-router-dom';
import data from './days/data';
import DayItem from './DayItem';



const DayList = ({onDaySelect}) => {

  const dayList=({onDaySelect, day})=>{
    return <div onClick={()=>{onDaySelect(day)}}>blah</div>
  }

  const renderedDays = data.public.map((day) => {
    return (
      <dayList onDaySelect={onDaySelect} key={day.title} day={day}>{day}</dayList>
    )
  })



  return (
      <div className="ui segment">
        {renderedDays}
      </div>
  )
}

export default DayList;

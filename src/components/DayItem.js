import React from 'react';

const DayItem = ({day, onDaySelect}) => {
  return(
    <div onClick={()=>{onDaySelect(day)}}>
      <div className="header">{day.title}</div>
    </div>
  )
}

export default DayItem;

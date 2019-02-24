import React from 'react';
import data from './days/data';

const DayChallenge = (props) => {

const tempStyle = {
  marginBottom : '30px'
}

  if (!props.day) {
    return <div>Select a day!</div>
  }

  return (
    <div style={tempStyle} className="ui segment">
      {props.day.title}
    </div>
  )

}

export default DayChallenge;

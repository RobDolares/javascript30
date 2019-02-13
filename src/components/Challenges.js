import React from 'react';
import DayNav from './DayNav';
import DayChallenge from './DayChallenge';
import data from './days/data';

class Challenges extends React.Component {

state = {
  selectedDay: null
}

onDaySelect = (day) => {
  this.setState({
    selectedDay: day
  })
}

render(){

  return(
    <div className="ui container">
      <h1>Challenges</h1>
      <DayNav data={data} onDaySelect={this.onDaySelect} />
      <DayChallenge day={this.state.selectedDay} />
    </div>
    )
  }
}

export default Challenges;

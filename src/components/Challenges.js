import React from 'react';
import {Route, Link} from 'react-router-dom';
import data from './days/data';
// import DayChallenge from './DayChallenge';

class Challenges extends React.Component {
state = {
  data: data
}

render(){

const arrayCounter = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

// Mapping for pascal casing issue with route component strings
  let dayMap = [];
  for (var i = 0; i < data.public.length ; i++) {
    dayMap[`Day`+i] = data.public[i].component
  }

// Build list of links for specific days
  const dayList = (i)=>{
    return (
        <Link to={`${this.props.match.url}/day${i}`} >
          <div>Day {i}</div>
        </Link>
    )
  }

// Dynamic Route build for every component
  const dayChallenges = (i)=>{
    return (
      // <DayChallenge>
        <Route path={`${this.props.match.url}/day${i}`} component={dayMap[`Day${i-1}`]} />
      // </DayChallenge>
    )
  }

  return (
    <div>
      <div className="ui container grid">
        {arrayCounter.map((num) => <div key={num} data={data}>{dayList(num)}</div>)}
      </div>
      <div className="ui segment">
        {arrayCounter.map((num) => <div key={num} data={data.public[num]}>{dayChallenges(num)}</div>)}
      </div>
    </div>
  )
}
};

export default Challenges;

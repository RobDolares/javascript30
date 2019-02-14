import React from 'react';
import {Route, Link} from 'react-router-dom';
import data from './days/data';

class Challenges extends React.Component {


render(){

const arrayCounter = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

// Mapping for pascal casing issue with route component strings
  let dayMap = {};
  for (var i = 0; i < data.public.length ; i++) {
    dayMap[`Day`+i] = data.public[i].component
  }

console.log(data);
// Build list of links for specific days
  const dayList = (i)=>{
    return (
        <Link to={`${this.props.match.url}/day${i}`}>
          <div>Day {i}</div>
        </Link>
    )
  }

// Dynamic Route build for every component
  const dayChallenges = (i)=>{
    return (
      <Route path={`${this.props.match.url}/day${i}`} component={dayMap[`Day${i-1}`]} />
    )
  }

  return (
    <div>
    {
     arrayCounter.map((n) => {
         return <div>{dayList(n)}</div>
     })
     }
     {
     arrayCounter.map ((n) => {
           return <div>{dayChallenges(n)}</div>
       })
     }
  </div>
)
}
};

export default Challenges;

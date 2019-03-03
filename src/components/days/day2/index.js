import React from 'react';
import cx from 'classnames';
import styles from './day2.module.css';

class Day2 extends React.Component {


state = {
  secDeg: 0,
  minDeg: 0,
  hourDeg: 0,
}

componentDidMount(){
  setInterval(()=> this.setDate(), 1000);
}

componentDidUnmount(){
  this.setDate();
}

setDate(){
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  console.log("Hour: "+hour+ ", Minute: "+ minute + ", Second: "+ second);

  //hour
  let hourDeg = ((hour * (360/12)) + (minute * (360/60) / 12)) + 90;

  //minute
  let minDeg = ((minute * (360/60)) + (second * (360/60) / 60)) + 90;

  //second
  let secDeg = (second * 360 / 60) + 90;

  this.setState({
      secDeg : secDeg,
      minDeg: minDeg,
      hourDeg: hourDeg
    });

}

render(){
  const {secDeg, minDeg, hourDeg} = this.state;
  return (
    <div className="ui container">
    <h1 className={styles.dayTitle}>Day 2 Build</h1>
    <div className={styles.challengeContainer}>
      <div className={styles.clock}>
        <div className={styles.clockFace}>
          <div className={styles.clockMiddle}></div>
          <div style={{transform: `rotate(${secDeg}deg)`}} className={cx(styles.secondHand, styles.hand)}></div>
          <div style={{transform: `rotate(${minDeg}deg)`}} className={cx(styles.minuteHand, styles.hand)}></div>
          <div style={{transform: `rotate(${hourDeg}deg)`}} className={cx(styles.hourHand, styles.hand)}></div>
        </div>
      </div>
    </div>
  </div>
  )
}
}

export default Day2;

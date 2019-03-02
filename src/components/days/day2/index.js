import React from 'react';
import cx from 'classnames';
import styles from './day2.module.css';

class Day2 extends React.Component {


// componentDidMount(){
//   this.loadInterval = setInterval(this.setDate, 1000);
// }
//
// setDate(){
//   setInterval(()=>{
//     let now, sec, min, hour;
//     now = new Date();
//     sec = ((now.getSeconds() / 60) * 360);
//
//
//     document.querySelector('.secondHand').style.transform = `rotate(${this.sec}deg)`;
//   },1000)
//
// }

render(){
  return (
    <div className="ui container">
    <h1 className={styles.dayTitle}>Day 2 Build</h1>
    <div className={styles.challengeContainer}>
      <div className={styles.clock}>
        <div className={styles.clockFace}>
          {/* <div className={styles.clockMiddle}></div> */}
          <div className={cx(styles.secondHand, styles.hand)}></div>
          <div className={cx(styles.minuteHand, styles.hand)}></div>
          <div className={cx(styles.hourHand, styles.hand)}></div>
        </div>
      </div>
    </div>
  </div>
  )
}
}

export default Day2;

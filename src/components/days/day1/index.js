import React, {Component} from 'react';
import styles from './day1.module.css';
import PadList from './components/PadList';

class Day1 extends Component {


  render() {
    return (
      <div className="ui container">
      <h1 className={styles.dayTitle}>Day 1 Build</h1>
      <div className={styles.challengeContainer}>
        <PadList styles={styles}/>
      </div>
    </div>
    )
  }

}

export default Day1;

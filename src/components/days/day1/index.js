import React, {Component} from 'react';
import styles from './day1.module.css';
import KeyList from './components/KeyList';

class Day1 extends Component {



  render() {
    return (
      <div className="ui container">
      <h1 className={styles.dayTitle}>Day 1 Build</h1>
      <div className={styles.challengeContainer}>
        <KeyList styles={styles}/>
      </div>
    </div>
    )
  }

}

export default Day1;

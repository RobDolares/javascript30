import React from 'react';
import styles from './day3.module.css';


class Day3 extends React.Component {

  state = {
    num : ''
  }

handleChange(e){
  const suffix = e.target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
}

randomPhoto(){
  let num = Math.floor(Math.random() * 1000);
  this.setState({ num })
}


render(){


  return (
    <div className="ui container">
      <h1 className={styles.dayTitle}>Day 3 Build</h1>
      <div className={styles.challengeContainer}>
        <h2>Updating CSS Variables With <span className={styles.highlighted}>JS</span></h2>
        <div className={styles.controls}>
          <div>
            <label htmlFor="spacing">Spacing:</label>
            <input
              name="spacing"
              type="range"
              min="10"
              max="200"
              defaultValue="30px"
              data-sizing="px"
              onChange={this.handleChange.bind(this)}/>
          </div>
          <div>
            <label htmlFor="blur">Blur:</label>
            <input
              name="blur"
              type="range"
              min="0"
              max="10"
              defaultValue= "2"
              data-sizing="px"
              onChange={this.handleChange.bind(this)}/>
          </div>
          <div>
            <label htmlFor="base">Base Color:</label>
            <input
              name = "baseColor"
              type = "color"
              defaultValue = "#9a1a8a"
              onChange={this.handleChange.bind(this)}/>
          </div>
        </div>
        <button className="ui button" onClick={this.randomPhoto.bind(this)}>Generate Random Photo</button>
        <img src={`http://unsplash.it/800/500?image=${this.state.num}`} alt="unsplash"/>
      </div>
    </div>
  )
}


}

export default Day3;

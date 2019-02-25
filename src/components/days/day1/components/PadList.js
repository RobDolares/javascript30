import React from 'react';
import keyData from '../keyData';
import Pad from './Pad';

class PadList extends React.Component{


render(){

let keys = [];
keys = keyData.map((pad, i) => {
  return (
    <Pad
        key={i}
        pad={pad}
        styles={this.props.styles}
        src={pad.src}/>
  )
})

  return (
    <div className={this.props.styles.keyContainer}>
      {keys}
    </div>
    )
}
}

export default PadList;

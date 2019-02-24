import React from 'react';
import keyData from '../keyData';

class KeyList extends React.Component{


  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; // resets sound to beginning if pressed repeatedly
    audio.play();
  }


render(){

  let soundMap = [];
  for (var i = 0; i < keyData.length ; i++) {
    soundMap['id'] = keyData[i].keyCode
  }

let keys = [];
keys = keyData.map(data => {
  return (
    <div key={data.sound} data-key={data.keyCode} className={this.props.styles.key}>
      <kbd>{data.kbd}</kbd>
      <span className={this.props.styles.sound}>{data.sound}</span>
      <audio data-key={data.keyCode} src={data.src} id={data.kbd}></audio>
    </div>
  )
})

  return (
    <div className={this.props.styles.keys}>
      {keys}
    </div>
    )
}
}

export default KeyList;

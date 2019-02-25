import React from 'react';

class Pad extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      playing: false
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onPlay = this.onPlay.bind(this);

  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyPress(e) {

    if (e.keyCode === this.props.pad.keyCode) {
      this.onPlay();
    }
  }

  onPlay() {
    const audio = document.getElementById(this.props.pad.kbd);

    if (!audio)
      return;
    audio.currentTime = 0; // resets sound to beginning if pressed repeatedly
    audio.play();

    this.setState({playing: true})
    setTimeout(() => {
      this.setState({playing: false})
    }, 100);
  }

  render() {

    const style = this.state.playing ? this.props.styles.active : this.props.styles.key;

    return (
      <div className={style} key={this.props.pad.kbd} data-key={this.props.pad.keyCode}>
        <kbd>{this.props.pad.kbd}</kbd>
        <span className={this.props.styles.sound}>{this.props.pad.sound}</span>
        <audio id={this.props.pad.kbd} data-key={this.props.pad.keyCode} src={this.props.pad.src}></audio>
      </div>)
  }
}

export default Pad;

import clap from './sounds/clap.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick.wav';
import openhat from './sounds/openhat.wav';
import boom from './sounds/boom.wav';
import ride from './sounds/ride.wav';
import snare from './sounds/snare.wav';
import tom from './sounds/tom.wav';
import tink from './sounds/tink.wav';

const keyData = [
    {
      kbd : 'q',
      keyCode : 81,
      sound: 'clap',
      src: clap
    },
    {
      kbd : 'w',
      keyCode : 87,
      sound: 'hihat',
      src: hihat
    },
    {
      kbd : 'e',
      keyCode : 69,
      sound: 'kick',
      src: kick
    },
    {
      kbd : 'a',
      keyCode : 65,
      sound: 'openhat',
      src: openhat
    },
    {
      kbd : 's',
      keyCode : 83,
      sound: 'boom',
      src: boom
    },
    {
      kbd : 'd',
      keyCode : 68,
      sound: 'ride',
      src: ride
    },
    {
      kbd : 'z',
      keyCode : 90,
      sound: 'snare',
      src: snare
    },
    {
      kbd : 'x',
      keyCode : 88,
      sound: 'tom',
      src: tom
    },
    {
      kbd : 'c',
      keyCode : 67,
      sound: 'tink',
      src: tink
    }
  ]

export default keyData;

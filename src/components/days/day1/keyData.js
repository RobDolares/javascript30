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
      kbd : 'a',
      keyCode : 65,
      sound: 'clap',
      src: clap
    },
    {
      kbd : 's',
      keyCode : 83,
      sound: 'hihat',
      src: hihat
    },
    {
      kbd : 'd',
      keyCode : 68,
      sound: 'kick',
      src: kick
    },
    {
      kbd : 'f',
      keyCode : 70,
      sound: 'openhat',
      src: openhat
    },
    {
      kbd : 'g',
      keyCode : 71,
      sound: 'boom',
      src: boom
    },
    {
      kbd : 'h',
      keyCode : 72,
      sound: 'ride',
      src: ride
    },
    {
      kbd : 'j',
      keyCode : 74,
      sound: 'snare',
      src: snare
    },
    {
      kbd : 'k',
      keyCode : 75,
      sound: 'tom',
      src: tom
    },
    {
      kbd : 'l',
      keyCode : 76,
      sound: 'tink',
      src: tink
    }
  ]

export default keyData;

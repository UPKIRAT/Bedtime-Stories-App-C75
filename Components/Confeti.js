import React from 'react';
import LottieView from 'lottie-react-native';

export default class ConfetiAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/25016-confetti-falling.json')}
      style={{width:"60%"}}
      />
    )
  }
}
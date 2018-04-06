import React, { Component } from 'react';
import { RaisedButton, Slider } from 'material-ui';
import { debounce } from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mute, volume } from '../../api';
import './App.scss';

const style = {
  margin: 12,
};

/* eslint quotes: 0 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMuted: false,
      volumeLevel: 50,
    };

    this.slideVolume = debounce(this.slideVolume, 100);
  }

  toggleMute = async () => {
    const result = await mute();
    this.setState({ isMuted: result.mute });
  }

  slideVolume = async (event, value) => {
    console.log('slideVolume');
    const result = await volume(value);
    this.setState({ volumeLevel: result.volume });
  }

  render() {
    const { isMuted, volumeLevel } = this.state;
    const { toggleMute, slideVolume } = this;
    return (
      <>
        <p styleName="text"> hello! there </p>
        <MuiThemeProvider>
          <RaisedButton label={isMuted ? 'On' : 'Mute'} primary style={style} onClick={toggleMute} />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Slider
            defaultValue={volumeLevel}
            onChange={slideVolume}
            min={0}
            max={100}
            styleName="slider"
          />
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;

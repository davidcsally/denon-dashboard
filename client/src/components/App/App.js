import React, { Component } from 'react';
import { RaisedButton, Slider } from 'material-ui';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { mute, volume } from '../../api';

const style = {
  margin: 12,
};

/* eslint quotes: 0 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMuted: false,
      volume,
    };
  }

  toggleMute = async () => {
    const result = await mute();
    this.setState({ isMuted: result.mute });
  }

  toggleVolume = async () => {
    const result = await volume();
    this.setState({ volume: results.volume });
  }

  render() {
    const { isMuted } = this.state;
    const { toggleMute } = this;
    return (
      <>
        <MuiThemeProvider>
          <RaisedButton label={isMuted ? 'On' : 'Mute'} primary style={style} onClick={toggleMute} />
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;

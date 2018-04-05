import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { mute } from '../../api';

const style = {
  margin: 12,
};

/* eslint quotes: 0 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMuted: false,
    };
  }

  toggleMute = async () => {
    const result = await mute();
    console.log('result', result);
    this.setState({ isMuted: result.mute });
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

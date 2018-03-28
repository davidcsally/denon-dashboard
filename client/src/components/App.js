import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 12,
};

/* eslint quotes: 0 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      mute: false,
    };
  }

  toggleMute = () => {
    const { mute } = this.state;
    this.setState({ mute: !mute });
  }

  render() {
    const { mute } = this.state;
    const { toggleMute } = this;
    return (
      <>
        <MuiThemeProvider>
          <RaisedButton label={mute ? 'On' : 'Mute'} primary style={style} onClick={toggleMute} />
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;

/* eslint-disable react/jsx-indent */ // buggy with fragment syntax
import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import { mute, powerOff, powerOn } from '../../api';
import VolumeControl from '../VolumeControl/VolumeControl';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMuted: false,
      isOn: false,
    };
  }

  toggleMute = async () => {
    const result = await mute();
    this.setState({ isMuted: result.mute });
  }

  togglePower = async () => {
    if (this.state.isOn) {
      await powerOff();
      this.setState({ isOn: false });
    } else {
      await powerOn();
      this.setState({ isOn: true });
    }
  }

  render() {
    const { isMuted, isOn } = this.state;
    return (
      <MuiThemeProvider>
        <div styleName="full-width">
          <div styleName="container">
            <RaisedButton label={isOn ? 'Power Off' : 'Power On'} primary onClick={this.togglePower} styleName="raised-button" />

            <RaisedButton label={isMuted ? 'On' : 'Mute'} primary onClick={this.toggleMute} styleName="raised-button" />
            <VolumeControl />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

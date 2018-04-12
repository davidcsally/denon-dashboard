/* eslint-disable react/jsx-indent */ // buggy with fragment syntax
import React, { Component } from 'react';
import { FloatingActionButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import PowerInput from 'material-ui/svg-icons/action/power-settings-new';
import { throttle } from 'lodash';

import { powerOff, powerOn, powerStatus } from '../../api';
import VolumeControl from '../VolumeControl/VolumeControl';
import SourceGrid from '../SourceGrid/SourceGrid';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOn: false,
    };
    this.togglePower = throttle(this.togglePower, 1100);
  }

  componentDidMount() {
    return powerStatus()
      .then((res) => {
        const { power } = res;
        this.setState({ isOn: power });
      });
  }

  /** TODO buggy timing issues */
  togglePower = async () => {
    if (this.state.isOn) {
      const result = await powerOff();
      const { power } = result;
      this.setState({ isOn: power });
    } else {
      const result = await powerOn();
      const { power } = result;
      this.setState({ isOn: power });
    }
  }

  render() {
    const { isOn } = this.state;
    return (
      <MuiThemeProvider >
        <div styleName="full-width">
          <div styleName="container">
            <div styleName="full-width-power">
              <FloatingActionButton
                mini
                onClick={this.togglePower}
                backgroundColor={isOn ? 'green' : 'red'}
                styleName="power-btn"
              >
                <PowerInput />
              </FloatingActionButton>
            </div>
            <SourceGrid />
            <VolumeControl />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

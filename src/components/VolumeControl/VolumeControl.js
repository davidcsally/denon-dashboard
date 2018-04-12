import React, { Component } from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import { RaisedButton, Slider, FloatingActionButton } from 'material-ui';
import { debounce } from 'lodash';
import { volume, volUp, volDown, mute } from '../../api';

import './VolumeControl.scss';

class VolumeControl extends Component {
  constructor() {
    super();
    this.state = {
      isMuted: false,
      volumeLevel: 50,
    };
    this.slideVolume = debounce(this.slideVolume, 100);
  }

  slideVolume = async (event, value) => {
    const result = await volume(value);
    this.setState({ volumeLevel: result.volume });
    // this.setState({ volumeLevel: value }); // testing
  }

  buttonVolUp = async () => {
    const result = await volUp();
    this.setState({ volumeLevel: result.volume });
    // this.setState({ volumeLevel: this.state.volumeLevel += 1 }); // testing
  }

  buttonVolDown = async () => {
    const result = await volDown();
    this.setState({ volumeLevel: result.volume });
    // this.setState({ volumeLevel: this.state.volumeLevel -= 1 }); // testing
  }

  toggleMute = async () => {
    const result = await mute();
    this.setState({ isMuted: result.mute });
  }

  render() {
    const { volumeLevel, isMuted } = this.state;
    return (
      <div styleName="container">
        <div styleName="gradient">
          <div styleName="text">
            <RaisedButton label={isMuted ? 'On' : 'Mute'} primary onClick={this.toggleMute} styleName="raised-button" />
            Volume: {volumeLevel}
          </div>
          <div styleName="slider-container">
            <FloatingActionButton mini onClick={this.buttonVolDown} styleName="vol-button">
              <ContentRemove />
            </FloatingActionButton>
            <Slider
              value={volumeLevel}
              onChange={this.slideVolume}
              min={0}
              max={100}
              styleName="slider"
            />
            <FloatingActionButton mini onClick={this.buttonVolUp} styleName="vol-button">
              <ContentAdd />
            </FloatingActionButton>
          </div>
        </div>
      </div>
    );
  }
}

export default VolumeControl;

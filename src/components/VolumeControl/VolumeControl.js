import React, { Component } from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import { Slider, FloatingActionButton } from 'material-ui';
import { debounce } from 'lodash';
import { volume, volUp, volDown } from '../../api';

import './SliderBox.scss';

class SliderBox extends Component {
  constructor() {
    super();
    this.state = {
      volumeLevel: 50,
    };
    this.slideVolume = debounce(this.slideVolume, 100);
  }

  slideVolume = async (event, value) => {
    const result = await volume(value);
    this.setState({ volumeLevel: result.volume });
  }

  buttonVolUp = async (event, value) => {
    const result = await volUp(value);
    this.setState({ volumeLevel: result.volume });
  }

  buttonVolDown = async (event, value) => {
    const result = await volDown(value);
    this.setState({ volumeLevel: result.volume });
  }


  render() {
    const { volumeLevel } = this.state;
    return (
      <div styleName="container">
        <FloatingActionButton mini onClick={this.buttonVolDown}>
          <ContentRemove />
        </FloatingActionButton>
        <Slider
          defaultValue={volumeLevel}
          onChange={this.slideVolume}
          min={0}
          max={100}
          styleName="slider"
        />
        <FloatingActionButton mini onClick={this.buttonVolUp}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

export default SliderBox;

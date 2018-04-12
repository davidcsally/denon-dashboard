import React, { Component } from 'react';
import { RaisedButton, Popover, Menu, MenuItem } from 'material-ui';
import './SourceGrid.scss';

class SourceGrid extends Component {
  constructor() {
    super();
    this.state = {
      source: 'Network',
      popoverOpen: false,
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      popoverOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      popoverOpen: false,
    });
  };

  handleSourceSelection = (value) => {
    console.log('value: ', value);
    this.setState({ source: value, popoverOpen: false });
  }

  render() {
    const { popoverOpen, source } = this.state;
    return (
      <div styleName="container">
        <p>Source: {source}</p>
        <RaisedButton styleName="main-selector" onClick={this.handleClick}>
          Source
        </RaisedButton>
        <Popover
          open={popoverOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'middle', vertical: 'top' }}
          targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem
              primaryText="Network"
              onClick={() => { this.handleSourceSelection('Network'); }}
            />
            <MenuItem
              primaryText="iPod / USB"
              onClick={() => { this.handleSourceSelection('iPod / USB'); }}
            />
            <MenuItem
              primaryText="TV"
              onClick={() => { this.handleSourceSelection('TV'); }}
            />
            <MenuItem
              primaryText="DVD"
              onClick={() => { this.handleSourceSelection('DVD'); }}
            />
            <MenuItem
              primaryText="Blu-Ray"
              onClick={() => { this.handleSourceSelection('Blu-Ray'); }}
            />
            <MenuItem
              primaryText="CD"
              onClick={() => { this.handleSourceSelection('CD'); }}
            />
            <MenuItem
              primaryText="Record / Phono"
              onClick={() => { this.handleSourceSelection('Record / Phono'); }}
            />
            <MenuItem
              primaryText="Game"
              onClick={() => { this.handleSourceSelection('Game'); }}
            />
            <MenuItem
              primaryText="Aux"
              onClick={() => { this.handleSourceSelection('Aux'); }}
            />

          </Menu>
        </Popover>
        <div>
          <RaisedButton styleName="grid" >
            USB
          </RaisedButton>
          <RaisedButton styleName="grid" >
            Network
          </RaisedButton>
          <RaisedButton styleName="grid" >
            Game
          </RaisedButton>
        </div>
        <div>
          <RaisedButton styleName="grid" >
            Tuner
          </RaisedButton>
          <RaisedButton styleName="grid" >
            TV
          </RaisedButton>
          <RaisedButton styleName="grid" >
            Aux
          </RaisedButton>
        </div>
      </div >
    );
  }
}

export default SourceGrid;

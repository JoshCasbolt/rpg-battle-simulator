import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HealthBar from '../HealthBar/HealthBar';

const PlayerView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlayerPortrait = styled.img`
  height: 256px;
  width: 256px;
`;

class Player extends Component {
  state = {
    health: {
      currentHealth: 100,
      maxHealth: 100,
    },
  }

  render() {
    const {
      character,
    } = this.props;

    const {
      health,
    } = this.state;

    return (
      <PlayerView>
        <PlayerPortrait src={character.image} />
        <HealthBar health={character.hitpoints} />
      </PlayerView>
    );
  }
}

Player.propTypes = {
  character: PropTypes.object,
};

export default Player;

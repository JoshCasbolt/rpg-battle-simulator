import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const assetPath = '../../assets/';


const PlayerView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlayerPortrait = styled.div`
  height: 256px;
  width: 256px;
  background-size: cover;
  background-image: url(${(props) => props.character.image});
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

    return (
      <PlayerView>
        <PlayerPortrait character={character} />
      </PlayerView>
    );
  }
}

Player.propTypes = {
  character: PropTypes.object,
};

export default Player;
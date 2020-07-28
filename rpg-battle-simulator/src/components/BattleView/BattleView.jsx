import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Player from '../Player/Player';
import Interface from '../Interface/Interface';
import Villager from '../../assets/villager.png';
import Orc from '../../assets/orc.png';

const LargeTitle = styled.h2`
  font-size: 40px;
  text-align: center;
`;
const View = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
`;

class BattleView extends Component {
  state = {
    characters: [
      {
        type: 'Villager',
        image: Villager,
        hitpoints: 100,
      },
      {
        type: 'Orc',
        image: Orc,
        hitpoints: 100,
      },
    ],
  }

  handleAttack = () => {
    const {
      characters,
    } = this.state;

    this.setState((currentState) => ({
      characters: [
        {
          ...currentState.characters[0],
          hitpoints: currentState.characters[0].hitpoints - 10,
        },
        {
          ...currentState.characters[1],
          hitpoints: currentState.characters[1].hitpoints - 10,
        },
      ],
    }));
  }

  render() {
    const {
      characters,
    } = this.state;

    return (
      <div>
        <LargeTitle>Battle Simulator</LargeTitle>
        <View>
          <Player character={characters[0]} />
          <Interface buttonHandler={this.handleAttack} />
          <Player character={characters[1]} />
        </View>
      </div>
    );
  }
}

BattleView.propTypes = {

};

export default BattleView;

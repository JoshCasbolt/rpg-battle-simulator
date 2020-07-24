import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Player from '../Player/Player';

const LargeTitle = styled.h2`
  font-size: 40px;
`;

function BattleView(props) {
  const {
    characters,
  } = props;

  return (
    <div>
      <LargeTitle>Battle Simulator</LargeTitle>
      <Player character={characters[0]} />
      <Player character={characters[1]} />
    </div>
  );
}

BattleView.propTypes = {
  characters: PropTypes.array,
};

export default BattleView;
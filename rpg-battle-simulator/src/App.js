import React from 'react';
import BattleView from './components/BattleView/BattleView';
import Villager from './assets/villager.png';
import Orc from './assets/orc.png';

const gameCharacters = [
  {
    type: 'Villager',
    image: Villager,
  },
  {
    type: 'Orc',
    image: Orc,
  },
];

function App() {
  return (
    <BattleView characters={gameCharacters} />
  );
}

export default App;

import * as React from 'react';

import Board from 'features/Board';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <header>
        <img src='/images/icons8-mochi-96.png' alt="three mochis on a plate in a cartoon style" />
        <h1>Mochi Tasks</h1>
        <img src='/images/icons8-mochi-96.png' alt="three mochis on a plate in a cartoon style" />
      </header>
      <Board />
    </div>
  );
};

export default App;

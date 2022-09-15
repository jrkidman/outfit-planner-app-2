import './App.css';
import { useState } from 'react';
import clothing from './data';

function App() {
  const [dressCode, setDressCode] = useState('casual');

  const findItem = (type) => {
    const filteredItems = clothing.filter(
      (clothingItem) =>
        clothingItem.type === type && clothingItem.dressCode === dressCode
    );

    return filteredItems[Math.floor(Math.random() * filteredItems.length)];
  };

  return (
    <div className="App-container">
      <div id="header">
        <div><h2>Outfit Planner</h2></div>
        <div><h3>Get Help Deciding What To Wear</h3></div>
        <div><h2>Choose Your Desired Dress Code</h2></div>
      </div>
      <div id="buttons-container">
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => setDressCode('casual')}>Casual</button>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => setDressCode('sport')}>Sport</button>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => setDressCode('formal')}>Formal</button>
        </div>
      </div>
      <div id="outfit-container">
        <div>
          <h3>Top</h3>
          <div>
            <img
              src={findItem('top').imageUrl}
              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
              alt="top item"
            />
          </div>
        </div>
        <div>
          <h3>Bottom</h3>
          <div>
            <img
              src={findItem('bottom').imageUrl}
              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
              alt="Bottom item"
            />
          </div>
        </div>
        <div>
          <h3>Shoes</h3>
          <div>
            <img src={findItem('shoes').imageUrl} style={{ width: '120px', height: '120px', objectFit: 'cover' }} alt="shoes item" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

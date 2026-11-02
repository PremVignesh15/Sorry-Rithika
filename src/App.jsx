import React, { useState } from 'react';
import OpeningScreen from './components/OpeningScreen';
import ApologyScreen from './components/ApologyScreen';
import CelebrationScreen from './components/CelebrationScreen';
import './App.css';

function App() {
  const [stage, setStage] = useState('opening'); // opening, apology, celebration

  const handleProceed = () => setStage('apology');
  const handleAccept = () => setStage('celebration');
  const handleReplay = () => setStage('opening');

  return (
    <div className="app">
      {stage === 'opening' && <OpeningScreen onProceed={handleProceed} />}
      {stage === 'apology' && <ApologyScreen onAccept={handleAccept} />}
      {stage === 'celebration' && <CelebrationScreen onReplay={handleReplay} />}
    </div>
  );
}

export default App;

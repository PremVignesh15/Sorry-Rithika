import React from 'react';
import HeartBackground from './HeartBackground';
import './OpeningScreen.css';

const OpeningScreen = ({ onProceed }) => {
  return (
    <div className="screen opening-screen">
      <HeartBackground />
      <h1 className="title">Hey Rithikaaa 🥺❤️</h1>
      <p className="subtitle">I have something to tell you...</p>
      <button className="big-button" onClick={onProceed}>Sryyyyy 🥹</button>
    </div>
  );
};

export default OpeningScreen;

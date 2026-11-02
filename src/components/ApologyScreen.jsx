import React, { useState, useEffect } from 'react';
import './ApologyScreen.css';

import HeartBackground from './HeartBackground';

const messages = [
  "Yen pa ipdi panra Rithika 😂",
  "Pleaseee manichiru 🥺",
  "Innum kovama irukkiya?",
  "Unakku chocolate vaangi tharen 🍫",
  "Last chance pleaseee ❤️",
  "YES click pannuuuu 😭"
];

const ApologyScreen = ({ onAccept }) => {
  const [yesSize, setYesSize] = useState(1);
  const [noPos, setNoPos] = useState({ top: '50%', left: '50%' });
  const [msgIndex, setMsgIndex] = useState(0);

  const handleNoClick = () => {
    // Increase YES button size
    setYesSize(prev => prev + 0.1);
    // Show next message
    setMsgIndex(prev => (prev + 1) % messages.length);
    // Move NO button to random position within viewport
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const button = document.getElementById('no-button');
    const btnRect = button.getBoundingClientRect();
    const maxLeft = vw - btnRect.width;
    const maxTop = vh - btnRect.height;
    const newLeft = Math.random() * maxLeft;
    const newTop = Math.random() * maxTop;
    setNoPos({ top: `${newTop}px`, left: `${newLeft}px` });
  };

  const handleYesClick = () => {
    onAccept();
  };

  return (
    <div className="screen apology-screen">
      <HeartBackground />
      <h1 className="question">Manichitiya paithiyoo? 🥺👉👈</h1>
      <p className="fun-msg">{messages[msgIndex]}</p>
      <div className="button-group" style={{ position: 'relative', height: '150px' }}>
        <button
          className="yes-button"
          onClick={handleYesClick}
          style={{
            transform: `scale(${yesSize})`,
            transition: 'transform 0.3s ease'
          }}
        >
          YES ❤️
        </button>
        <button
          id="no-button"
          className="no-button"
          onClick={handleNoClick}
          style={{
            position: 'absolute',
            top: noPos.top,
            left: noPos.left,
            transition: 'top 0.5s ease, left 0.5s ease'
          }}
        >
          NO 😤
        </button>
      </div>
    </div>
  );
};

export default ApologyScreen;

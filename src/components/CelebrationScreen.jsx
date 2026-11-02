import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import './CelebrationScreen.css';
import HeartBackground from './HeartBackground';

const CelebrationScreen = ({ onReplay }) => {
  useEffect(() => {
    // Fire a burst of confetti
    const duration = 5 * 1000;
    const end = Date.now() + duration;
    const colors = ['#ff69b4', '#9370db', '#ffb6c1', '#dda0dd'];
    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
    // Additional fireworks effect using intervals
    const fireworks = setInterval(() => {
      confetti({
        particleCount: 30,
        spread: 70,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors,
      });
    }, 500);
    return () => clearInterval(fireworks);
  }, []);

  return (
    <div className="screen celebration-screen">
      <HeartBackground />
      <h1 className="big-text">THANK YOUUU RITHIKAAA! ❤️</h1>
      <p className="sub-text">I knew you would forgive me! 🥹</p>
      <p className="sub-text">You're the besttt! Stay happy always! 💗</p>
      <div className="heart-icon" />
      <button className="replay-button" onClick={onReplay}>Play Again</button>
    </div>
  );
};

export default CelebrationScreen;

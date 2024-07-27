import React from 'react';
import './App.css';
import DurgaModel from './DurgaModel';

function App() {
  return (
    <div className="App">
      {/* Video Background */}
      <video className="App-video" autoPlay loop muted>
        <source src="/video/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 3D Scene */}
      <div className="App-canvas">
        <DurgaModel />
      </div>
    </div>
  );
}

export default App;

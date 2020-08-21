import React from 'react';
import './App.css';
import { WeatherBoard } from '../src/components/WeatherBoard';

function App() {
  return (
    <div className="App container">
      <h2 className="text-center mt-4 mb-5">Przelicznik temperatur</h2>
      < WeatherBoard />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Timer } from './features/timer/Timer';
import 'fontsource-roboto';
import './App.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">

        <Timer />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'

function App({name, age}) {
  return (
    <div className="App">
    <h1>Hello for app.js updated with props {name} age={age}</h1>
    <Hello firstname={name}></Hello>
    </div>
  );
}

export default App;

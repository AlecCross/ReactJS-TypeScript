import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <MyComponent name="Andrew" age={30} isStudent />
      <div>
        <Button>Default</Button>
        <Button primary>Primary</Button>
      </div>
    </div>
  );
}

export default App;

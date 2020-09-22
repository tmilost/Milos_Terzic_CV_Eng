import React from 'react';
import logo from './assets/walkingVector/0.jpg';
import logo1 from './assets/walkingVector/1.jpg';
import logo2 from './assets/walkingVector/2.jpg';
import logo3 from './assets/walkingVector/3.jpg';
import logo4 from './assets/walkingVector/4.jpg';
import logo5 from './assets/walkingVector/5.jpg';
import logo6 from './assets/walkingVector/6.jpg';
import logo7 from './assets/walkingVector/7.jpg';
import logo8 from './assets/walkingVector/8.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

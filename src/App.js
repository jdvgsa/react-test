import React from 'react';
import './App.css';

const App = () => {
  const handleClick = () => { 
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="h1">This is my Cool Button that I made with React!</h1>
        
        <button className="button" onClick={handleClick}>Click me!!</button>
      </header>
    </div>
  );
}


export default App;

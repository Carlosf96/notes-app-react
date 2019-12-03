import React from 'react';
import './App.css';
import List from './components/List'
import AddButton from './components/AddButton'
function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <AddButton/>
      <List/>
    </div>
  );
}

export default App;

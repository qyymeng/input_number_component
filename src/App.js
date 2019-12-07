import React, { useState } from 'react';
import './App.css';
import InputNumber from './InputNumber';

function App() {
  const [value] = useState(4);
  return (
    <div className="App">
      <InputNumber value={value} onChange={e=>{}}/>
      <InputNumber defaultValue={value} onChange={e=>{}}/>
    </div>
  );
}

export default App;

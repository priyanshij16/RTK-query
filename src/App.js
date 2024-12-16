import './App.css';
import {Provider} from 'react-redux';
import Data from './components/Data.tsx';
import { useState } from 'react';

function App() {
  const [count, setCount]= useState(0);
  return (
    <div className="App">
    <Data/>
    </div>
  );
}

export default App;

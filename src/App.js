import { useState } from 'react';
import './App.css';
import Monoalphabetic from './Component/Monoalphabetic/Monoalphabetic';
import Navbar from './Component/Navbar/Navbar';
import ShipCipher from './Component/ShipCipher/ShipCipher';

function App() {

  const [pText , setcText] = useState('');
  return (
    <div>
      <Navbar/>
      <ShipCipher/>
      <Monoalphabetic value = {pText} onValueChange = {setcText}/>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Columnar from './Component/Columnar/Columnar';
import Monoalphabetic from './Component/Monoalphabetic/Monoalphabetic';
import Navbar from './Component/Navbar/Navbar';
import ShipCipher from './Component/ShipCipher/ShipCipher';

function App() {

  return (
    <div>
      <Navbar/>
      <ShipCipher/>
      <Columnar/>
      {/* <Monoalphabetic/> */}
    </div>
  );
}

export default App;

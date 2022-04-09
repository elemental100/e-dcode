import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import './App.css';
import Columnar from './Component/Columnar/Columnar';
import Monoalphabetic from './Component/Monoalphabetic/Monoalphabetic';
import Navbar from './Component/Navbar/Navbar';
import ShipCipher from './Component/ShipCipher/ShipCipher';

function App() {

  return (
    <Box minHeight="100vh" bgColor={"blue.400"}>
      <Navbar/>
      <ShipCipher/>
      <Monoalphabetic/>
    </Box>
    
  );
}

export default App;

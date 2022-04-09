import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import './App.css';
import Monoalphabetic from './Component/Monoalphabetic/Monoalphabetic';
import Navbar from './Component/Navbar/Navbar';
import ShipCipher from './Component/ShipCipher/ShipCipher';

function App() {

  const [pText , setcText] = useState('');
  return (
    <Box minHeight="100vh" bgColor={"blue.400"}>
      <Navbar></Navbar>
    </Box>
  );
}

export default App;

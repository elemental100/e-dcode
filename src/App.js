import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Monoalphabetic from "./Component/Monoalphabetic/Monoalphabetic";
import Navbar from "./Component/Navbar/Navbar";
import Rsa from "./Component/RSA/Rsa";
import ShiftCipher from "./Component/ShiftCipher/ShiftCipher";
import Railfence from "./Component/Railfencecipher/Railfence";
import ParticlesBackground from "./ParticleBackground";

function App() {
  return (
    <Box minH={'100vh'} bgColor={'gray.900'}>
      <Box>
        <ParticlesBackground />
      </Box>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Monoalphabetic" element={<Monoalphabetic />} />
          <Route exact path="ShiftCipher" element={<ShiftCipher />} />
          <Route exact path="Railfence" element={<Railfence />} />
          <Route exact path="RSA" element={<Rsa />} />
        </Routes>
      </Router>

    </Box>
  );
}

export default App;

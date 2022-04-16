import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Columnar from "./Component/Columnar/Columnar";
import Monoalphabetic from "./Component/Monoalphabetic/Monoalphabetic";
import Navbar from "./Component/Navbar/Navbar";
import ShipCipher from "./Component/ShipCipher/ShipCipher";
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
          <Route exact path="ShipCipher" element={<ShipCipher />} />
          <Route exact path="Railfence" element={<Railfence />} />
        </Routes>
      </Router>

    </Box>
  );
}

export default App;

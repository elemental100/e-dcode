import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Columnar from "./Component/Columnar/Columnar";
import Monoalphabetic from "./Component/Monoalphabetic/Monoalphabetic";
import Navbar from "./Component/Navbar/Navbar";
import ShipCipher from "./Component/ShipCipher/ShipCipher";

function App() {
  return (
    <Box minHeight="100vh" bgColor={"blue.400"}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="Monoalphabetic" element={<Monoalphabetic />} />
          <Route exact path="ShipCipher" element={<ShipCipher />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Equipamentos from "./Equipamentos.jsx";
import Guia from "./Guia.jsx";
import Setup from "./Setup.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Equipamentos" element={<Equipamentos />} />
        <Route path="/guia" element={<Guia />} />
        <Route path="/setup" element={<Setup />} />
      </Routes>
    </>
  );
}

export default App;
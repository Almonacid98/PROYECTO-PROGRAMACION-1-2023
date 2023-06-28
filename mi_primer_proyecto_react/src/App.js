import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavbarBootstrap } from "./components/Navbar.js";
import { Login } from "./components/LoginSignUp/Login.jsx";
import { SignUp } from "./components/LoginSignUp/SignUp.jsx";
import { Home } from "./components/Home.jsx";
import { Carta } from "./components/Carta.jsx";
import { TableMap } from "./components/MapTable.jsx";
function App() {
  return (
    <Router>
      <NavbarBootstrap />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/carta" element={<Carta />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tables" element={<TableMap />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { NavbarBootstrap } from "./components/Navbar.js";
import { Login } from "./components/LoginSignUp/Login.jsx";
import { SignUp } from "./components/LoginSignUp/SignUp.jsx";
import { Menu } from "./components/Menu.jsx"
import{ Carta } from "./components/Carta.jsx" 
function App() {
  return (
   <div>
    <NavbarBootstrap/>
    <Menu/>
    <div className="menu-container">
      <Carta/>
    </div>
    <Login/>
    <SignUp/>
   </div>
  );
}
export default App;

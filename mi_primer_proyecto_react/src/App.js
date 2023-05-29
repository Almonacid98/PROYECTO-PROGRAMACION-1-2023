import React from "react";
import { NavbarBootstrap } from "./components/Navbar.js";
import { Login } from "./components/LoginSignUp/Login.jsx";
import { SignUp } from "./components/LoginSignUp/SignUp.jsx";
import { Menu } from "./components/Menu.jsx"
function App() {
  return (
   <div>
    <NavbarBootstrap/>
    <Menu/>
    <Login/>
    <SignUp/>
   </div>
  );
}
export default App;

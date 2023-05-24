import React from "react";
import { Ola } from "./components/Ola.js";
import { NavbarFlor } from "./components/NavbarFlor.js";
import { ButtonExample } from "./utils/Button.js";
import { Menu } from "./components/Menu.jsx"
import { Card } from "./components/Card.js"
function App() {
  return (
   <div>
    <NavbarFlor/>
    <Menu>
    </Menu>
   </div>
  );
}
export default App;
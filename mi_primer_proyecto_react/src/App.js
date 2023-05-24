import React from "react";
import { Ola } from "./components/Ola.js";
import { NavbarCustom } from "./components/NavbarCustom.js";
import { ButtonExample } from "./utils/Button.js";
import { Menu } from "./components/Menu.jsx"

export const App = () => {
  return (
   <div>
    <NavbarCustom/>
    <Menu>
    </Menu>
   </div>
  )
}

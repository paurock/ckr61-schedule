import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
  <div className="navbar">
    <ul className="menu">
      <li>
        <Link to={`muzclass`}>Кабинет 219</Link>
      </li>
      <li>
        <Link to={`receptionRoom`}>Комната у ресепшн</Link>
      </li>
      <li>
        <Link to={`costumerka`}>Хор (косюмерка)</Link>
      </li>
    </ul>
  </div>
);

export default Menu;

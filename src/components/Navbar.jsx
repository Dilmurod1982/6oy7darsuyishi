import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">6 oy 7 dars</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="./">Home</NavLink>
          </li>
          <li>
            <NavLink to="./about">About</NavLink>
          </li>
          <li>
            <NavLink to="./contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="./login">Login</NavLink>
          </li>
          <li>
            <NavLink to="./registr">Registr</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

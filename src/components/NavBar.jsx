import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function NavBar(props) {
  return (
    <div className="navbar bg-cyan-900">
      <div className="navbar-start flax items-center ms-5 gap-3">
        <img src={logo} className="w-9" alt="" />
        <a className="text-xl ">Let's Chat</a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to={props.link}
              className={`btn btn-ghost text-xl ${props.color}`}
            >
              {props.title}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

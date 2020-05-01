import React from 'react';
import { NavLink } from 'react-router-dom';
import './sass/nav.scss';

import { useHistory } from 'react-router-dom';

function Nav(props) {
  const {push} = useHistory();
  const logOut =()=>{
    localStorage.clear();
    push("/login");
  }
  return (
    <nav>
      <NavLink to="/" activeClassName="activeNavButton" className="logoName">
        <h2>Water My Plants</h2>
      </NavLink>
      <ul className="nav-links" id="nav-links">
        <li>
          <NavLink to="/protected" activeClassName="activeNavButton">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="activeNavButton">
            Profile
          </NavLink>
        </li>
        <li>
          {/*<NavLink to="/login" activeClassName="activeNavButton">
            Sign Out
          </NavLink>*/}
          <button onClick={logOut}>
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

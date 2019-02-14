import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

const burgerToggle = () => {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
}

  return (
      <div>
        <div id="navContainer">
          <nav className="navbar">
            <div className="navWide">
                <ul className="nav navbar-nav">
                  <li>
                    <NavLink to="/"><span>Home</span></NavLink>
                  </li>
                  <li>
                    <NavLink to="/challenges"><span>Challenges</span></NavLink>
                  </li>
                </ul>
            </div>
            <div className="navNarrow">
              <i className="fa fa-bars fa-2x col-md-10" onClick={burgerToggle}></i>
              <div className="narrowLinks ">
                <ul id="navNarList" className="nav navbar-nav">
                  <li onClick={burgerToggle}>
                    <NavLink to="/"><span>Home</span></NavLink>
                  </li>
                  <li onClick={burgerToggle}>
                    <NavLink to="/challenges"><span>Challenges</span></NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
  )

};


export default NavBar;

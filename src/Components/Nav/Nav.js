import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Nav () {
  return (
    <nav>
      <div className="container">
        <a href="#">moja firma</a>
        <div className="toggler">
          <div className="toggler-menu">
            <a href="#about">o nas</a>
            <a href="#offer">oferta</a>
            <a href="#" className="is-disabled">kontakt</a>
          </div>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="nav-links">
          <a href="#about">o nas</a>
          <a href="#offer">oferta</a>
          <a href="#" className="is-disabled">kontakt</a>
        </div>
      </div>
    </nav>
  )

}

export default Nav;
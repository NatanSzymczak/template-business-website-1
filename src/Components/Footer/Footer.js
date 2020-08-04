import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer () {
  return (
    <footer>
      <div class="container">
        <a>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</a>
        <div class="footer-links">
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://pl-pl.facebook.com/">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </div>
      </div>
    </footer>
  )

}

export default Footer;
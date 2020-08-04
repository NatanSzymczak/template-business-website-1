import React from 'react';
import './Offer.css';

function Offer () {
  return (
    <section className="offer" id="offer">
      <div className="container">
        <h1>Czym zajmuje się nasza firma? </h1>
        <div className="offer-boxes">
          <div className="offer-boxes-item">
            <div className="offer-boxes-item-cnt">
              <div className="offer-boxes-item-dot"></div>
              <h2>Usługa 1</h2>
              <span>(nowość)</span>
            </div>
          </div>
          <div className="offer-boxes-item">
            <div className="offer-boxes-item-cnt">
              <h2>Usługa 2</h2>
            </div>
          </div>
          <div className="offer-boxes-item">
            <div className="offer-boxes-item-cnt">
              <h2>Usługa 3</h2>
            </div>
          </div>
          <div className="offer-boxes-item">
            <div className="offer-boxes-item-cnt">
              <h2>Usługa 4</h2>
            </div>
          </div>
          <div className="offer-boxes-item">
            <div className="offer-boxes-item-cnt">
              <h2>Usługa 5</h2>
            </div>
          </div>
          <div className="offer-boxes-item">
            <div className="offer-boxes-item-cnt">
              <h2>Usługa 6</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer;
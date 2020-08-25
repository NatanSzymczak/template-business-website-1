import React from 'react';
import './OfferBox.css';

function OfferBox ({ offerName, isNew=false }) {
  return (
    <div className="offer-boxes-item">
      <div className="offer-boxes-item-cnt">
        { isNew && <div className="offer-boxes-item-dot" /> }
        <h2>{offerName}</h2>
        { isNew && <span>(nowość)</span> }
      </div>
    </div>
  )
}

export default OfferBox;
import React from 'react';
import './Offer.css';
import OfferBox from './OfferBox/OfferBox'

function Offer () {

  const offerList = [
    { offerName: "Usługa 1", isNew: true },
    { offerName: "Usługa 2"},
    { offerName: "Usługa 3"},
    { offerName: "Usługa 4"},
    { offerName: "Usługa 5"},
  ];

  return (
    <section className="offer" id="offer">
      <div className="container">
        <h1>Czym zajmuje się nasza firma? </h1>
        <div className="offer-boxes">
          { offerList.map(({ offerName, isNew }, id ) => <OfferBox key={id} offerName={offerName} isNew={isNew} />) }
        </div>
      </div>
    </section>
  )
}

export default Offer;
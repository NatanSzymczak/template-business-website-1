import React from 'react';
import './AboutEmployee.css';

function AboutEmployee({ name='Uknown name', desc='No description povided', img='https://via.placeholder.com/150' }) {
  let parsedImg;

  if (img.length < 10) {
    parsedImg = 'https://via.placeholder.com/150'
  } else { parsedImg = img }

  return (
    <div className="about-employee">
      <div className="about-employee-pic" style={{backgroundImage: `url(${parsedImg})`}}></div>
      <div className="about-employee-desc">
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default AboutEmployee;

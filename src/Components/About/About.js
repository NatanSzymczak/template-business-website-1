import React from 'react';
import AboutEmployee from './AboutEmployee/AboutEmployee';
import './About.css';

const employees = [
  {
    name: 'Wioletta',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'http://2.bp.blogspot.com/-XvqySV8oiKI/TifExUNlf2I/AAAAAAAACHs/gNJ0GiDvac8/s1600/Most+beautiful+woman+in+the+world+2.jpg'
  },
  {
    name: 'Piotr',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://s3.dziennik.pl/pliki/3002000/3002432-mezczyzna-900-667.jpg'
  },
  {
    name: 'Karolina',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://th.bing.com/th/id/OIP.JY9cswOpUXai2yby6ugCWgHaGW?pid=Api&rs=1'
  },
  {
    name: 'Michał',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: ''
  },
]

function About () {
  return (
    <section className="about" id="about">
    <div className="container">
      <h1>Nasi specjaliści</h1>
      { employees.map(({name, desc, img}, index) =>
        <AboutEmployee key={index} name={name} desc={desc} img={img} />
      ) }
    </div>
  </section>
  )
}

export default About;

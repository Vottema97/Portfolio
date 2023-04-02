import React from 'react';
import './about.css';
import GeoIcon from '../Home/Images/geo.svg';
import ReactPhoto from './Images/react.jpg';

const ABOUT_ME_TEXT = `I strive to become a part of a friendly and professional team where I can develop my skills in JavaScript, TypeScript, and React to achieve team results. I am a frontend developer with experience in backend development. I have experience working with Git. In the backend, I have worked with Node.js, Express, REST API, and PostgresSQL (Sequelize) databases. Currently, I am looking for a job in a company with a strong team and interesting projects, where I can gradually integrate into the workflow and constantly develop.`

function About(props) {
  const aboutTitle = 'ABOUT ME'
  const secondTitle = 'A dedicated Front-end Developer based in Hikkaduwa, Sri-Lanka'
  
  return (
    <div id='about' className='about-container'>
      <div className='about-me'>
        <div className='about-photo'>
          <img src={ReactPhoto} alt='React' />
        </div>
        <div className='about-text'>
          <h5>{aboutTitle}</h5>
          <h3>
            {secondTitle}
            <img className='geo-icon' src={GeoIcon} alt='Geo' />
            <p>{ABOUT_ME_TEXT}</p>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;

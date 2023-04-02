import React from 'react';
import './home.css';
import photo from './Images/photo.JPG';
import git from './Images/git.svg';
import singpost from './Images/singpost.svg';
import iconJS from './Images/iconJS.png';
import iconTS from './Images/iconTS.png';
import iconReact from './Images/iconReact1.png';
import iconFigma from './Images/iconfigma.png';
import iconBootstrap from './Images/iconBoot.png';
import iconHTML from './Images/iconhtml.svg';
import iconCSS from './Images/iconcss.svg';
import geo from './Images/geo.svg';

const Home = () => {
  const mainHeading = 'Front-End React Developer';
  const subHeading = `Hi, I'm Artem Votintsev. A passionate Front-end React Developer based in Hikkaduwa, Sri-Lanka`;

  const redirectGit = () => {
    window.open('https://github.com/Vottema97/Portfolio');
  };
  
  return (
    <div id="home" className="home-container">
      <div className="preview-block">
        <div className="preview">
          <div className="text-preview" style={{ maxWidth: '90%' }}>
            <h1 className="main-heading">{mainHeading}</h1>
            <p className="sub-heading">
              {subHeading}
              <img className="geo-icon " src={geo} alt="" />
            </p>
            <img className="singpost-icon" src={singpost} alt="" />
            <img onClick={redirectGit} className="git-icon" src={git} alt="" />
          </div>
          <div className="photo-preview">
            <img src={photo} alt="" />
          </div>
        </div>
        <div className="tech-stack">
          <p className="tech-stack-heading">Tech Stack |</p>
          <img className="tech-stack-icon" src={iconJS} alt="" />
          <img className="tech-stack-icon" src={iconTS} alt="" />
          <img className="tech-stack-icon" src={iconHTML} alt="" />
          <img className="tech-stack-icon" src={iconCSS} alt="" />
          <img className="tech-stack-icon" src={iconReact} alt="" />
          <img className="tech-stack-icon" src={iconFigma} alt="" />
          <img className="tech-stack-icon" src={iconBootstrap} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

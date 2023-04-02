import React, { useState } from 'react';
import './projects.css'
import proj from './Images/proj1.png'
import dev from './Images/dev.svg'
import demo from './Images/demo.svg'

function Projects(props) {
  const portfolioTitle = 'PORTFOLIO';
  const uniqueDevTitle = 'My project is a unique development';
  const voiceAssistantTitle = 'Voice Assistant';
  const voiceAssistantDescription = 'Your personal voice assistant that works in the background providing you with quick and convenient solutions for your daily tasks.';
  const voiceAssistantTech = 'Using Telegram Bot API, Web Speech API, and OpenAI API.';
  const demoBtnText = 'Live DEMO';
  const secondDemoBtnText = 'In developing :)';
  const timeDemoText = 2000
  const [demoText, setDemoText] = useState(demoBtnText)
  const checkDemo = () => {
    setDemoText(secondDemoBtnText)
    setTimeout(() => {
      setDemoText(demoBtnText)
    }, timeDemoText)
  }
  const fullScreen = (event) => {
    if (window.screen.width > 768) {
      event.target.classList.toggle('full-screen');
      document.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
          event.target.classList.remove('full-screen');
        }
      });
    }
  }

  return (
    <div id='projects' className='projects-container'>
      <div className='portfolio-header'>
        <h5 className='portfolio-title'>{portfolioTitle}</h5>
        <h3 className='unique-dev-title'>{uniqueDevTitle} <img src={dev} alt='' /></h3>
      </div>
      <div className='project-details'>
        <div className='project-screen'><img onClick={fullScreen} className='small-screen' src={proj} alt="" /></div>
        <div className='project-text'>
          <h4 className='project-title'>{voiceAssistantTitle}</h4>
          <p className='project-description'>{voiceAssistantDescription}</p>
          <p className='project-tech'>{voiceAssistantTech}</p>
          <div onClick={checkDemo} className='demo-btn'>
            {demoText}
            <img src={demo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

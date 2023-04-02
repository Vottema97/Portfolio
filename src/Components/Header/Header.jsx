import React from 'react';
import './header.css'

const SECTIONS = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

const Header = ({ setTheme }) => {
  const logo = 'Artem.dev'
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='header-container'>
        <div className='logo'><p onClick={() => setTheme((prev) => !prev)}>{logo}</p></div>
        <div className='navigation'>
          {SECTIONS.map((section) => (
            <span
              key={section.id}
              className='navigation-item'
              onClick={() => scrollToElement(section.id)}
            >
              {section.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;

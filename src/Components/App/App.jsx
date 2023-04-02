import './app.css'
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(false)
  return (
    <div className={theme ? 'App' : ''}>
      <Header setTheme={setTheme}/>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

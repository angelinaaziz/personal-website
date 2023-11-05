import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/angelina.png`} alt="" />
      </Link>
      <header>
        <h2>Angelina Aziz</h2>
        <p><a href="mailto:angelinaaziz1@gmail.com">angelinaaziz1@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Angelina. I am a software engineer at <a href="https://anaplan.com">Legal & General</a> in London.
        Currently pursuing a masters in Systems Engineering at <a href="https://www.lboro.ac.uk">Loughborough University</a>.
        I am the co-founder of <a href="https://www.auralyze.ai">auralyze.ai</a> an AI university interview prep platform.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Angelina Aziz<Link to="/"> angelina.dev</Link>.</p>
    </section>
  </section>
);

export default SideBar;

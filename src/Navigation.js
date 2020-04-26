import React from 'react';  
import './Navigation.css';

const Navigation = props =>(
  <header className="Navigation dt--fixed border-box bb b--black-10">
    <nav className="nav pa4-ns">
      <a className="yt dim black f4 f5-ns mr4" href="https://www.youtube.com/channel/UC-19kU4aNJRS77wRxo0uPHg" title="Watch on Youtube">YouTube</a>
      <a className="as dim red f4 f5-ns mr4" href="/" title="About">About</a>
      <a className="as dim red f4 f5-ns mr4" href="/" title="Contact">Contact</a>
      <a className="as dim red f4 f5-ns mr4" href="/" title="Search">Search</a>
  </nav>
  </header>
);

export default Navigation;
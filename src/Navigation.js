import React from 'react';  
import './Navigation.css';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';


const Navigation = props =>(

    <div>
  <header className="Navigation dt--fixed border-box bb b--black-10">
    <nav className="nav pa4-ns">
      <a className="yt dim black f4 f5-ns mr4" href="https://www.youtube.com/channel/UC-19kU4aNJRS77wRxo0uPHg" title="Watch on Youtube">YouTube</a>
      {/* <a className="as dim red f4 f5-ns mr4" href="https://mailchi.mp/a8b8bb3ecbc6/yogacharyaajay" title="Contact">Contact1</a>  */}

      
      <NavLink to="/" className="as dim red f4 f5-ns mr4">About</NavLink>
      <NavLink to="/Form" className="as dim red f4 f5-ns mr4">Contact</NavLink>
    </nav>
     </header>
     </div>

);

export default Navigation;
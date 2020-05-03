import React from 'react';  
import './Navigation.css';
import Form from './Contact';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Page from './Page';
import Slide from './SlideEffect'; 
import Grid from './Grid';




const Navigation = () =>
(
  <Router>
    <div>
      <div>
  <header className="Navigation dt--fixed border-box bb b--black-10">
    <nav className="nav pa4-ns">
      <a className="yt dim black f4 f5-ns mr4" href="https://www.youtube.com/channel/UC-19kU4aNJRS77wRxo0uPHg" title="Watch on Youtube">YouTube</a>
      <NavLink to="/" className="as dim red f4 f5-ns mr4">About</NavLink>
      <NavLink to="/Contact" className="as dim red f4 f5-ns mr4">Contact</NavLink>
    </nav>
     
     </header>


     </div>
     <Route exact path="/" component={Page} />
      <Route exact path="/" component={Slide} />
      <Route exact path="/" component={Grid} />
      <Route path="/Contact" component={Form } />
    </div>
  </Router>
);
export default Navigation;


// <Router><div>
// //   <header className="Navigation dt--fixed border-box bb b--black-10">
// //     <nav className="nav pa4-ns">
// //       <a className="yt dim black f4 f5-ns mr4" href="https://www.youtube.com/channel/UC-19kU4aNJRS77wRxo0uPHg" title="Watch on Youtube">YouTube</a>
// //       {/* <a className="as dim red f4 f5-ns mr4" href="/" title="About">About</a> 
// //       <a className="as dim red f4 f5-ns mr4" href="/" title="About">About</a>  */}

// //       <Link to="/Contact">Contact</Link>

// //       {/* <NavLink to="/about" className="as dim red f4 f5-ns mr4">About</NavLink>
// //       <NavLink to="/Contact" className="as dim red f4 f5-ns mr4">Contact</NavLink> */}
// //     </nav>
// // <Route path="/Contact" component = {Form} exact/> 
// // <Route path="/" component = {Page } /> 
// // <Route path="/" component = {Slide}  />
// // <br />
// // <br />
// // <br />
// // <Route path="/" component = {Grid}/> 
// //      </header>


// //      </div>
// //      </Router> 
import React, { Component } from 'react';
import Navigation from './Navigation';
import Page from './Page';
import Slide from './SlideEffect'; 
import Grid from './Grid';
import Contact from './Contact';

import './App.css';

class App extends Component {
render(){
  return (
    <div className="App">
      <Navigation />
     
      <Page />
      <Slide /> 
      <Grid />
      <Contact />
    </div>
  );
}
}
  export default App;
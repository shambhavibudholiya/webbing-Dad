import React, { Component } from 'react';
import Navigation from './Navigation';
import Page from './Page';
import Slide from './SlideEffect'; 
import Grid from './Grid';
import Form from './Contact';
import { BrowserRouter, Route} from 'react-router-dom'; 
import './App.css';
import './Navigation.css';
import BackToTop from "react-back-to-top-button";

class App extends Component {
render(){
return (
<div className="App">
<Navigation />   


  <BackToTop
  showOnScrollUp
  showAt={100}
  speed={1500}
  easing="easeInOutQuint"
>
<span>
<img width="80px" height="80px" src="https://www.decalsplanet.com/img_b/vinyl-decal-sticker-8136.jpg"></img>
</span>

</BackToTop>

  </div>
);
}
}
  export default App;
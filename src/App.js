
import './App.css';
import React from 'react'
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/'
import StartPage from './Pages/firstPage'
import Blog from './Pages/Blog'
import Demos from './Pages/Demos'
import Features from './Pages/Features'
import Shop from './Pages/Shop'
import Portfolio from './Pages/Portfolio'
import Shortcodes from './Pages/Shortcodes'


function App() {
  return (

    <div>
      <Switch>
      <Route path = "/" exact component= {StartPage} />
      <Route path = "/Blog" component={Blog} />
      <Route path = "/Demos" component={Demos} />
      <Route path = "/Features" component={Features} />
      <Route path = "/Shop" component={Shop} />
      <Route path = "/Portfolio" component={Portfolio} />
      <Route path = "/Shortcodes" component={Shortcodes} />
      </Switch>
      
      

      {/* <Blog />
      <Demos />
      <Features />
      <Shop />
      <Portfolio />
      <Shortcodes /> */}


    </div>
  

    
  );
}

export default App;

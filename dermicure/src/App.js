import React from 'react';
import './App.css';
import Footer from './Footer';
import Start from './Start';
import Timeline  from './Timeline';
import AI from './AI';
import Simplify from './Simplify';
import {BrowserRouter as Router, Switch, Route }from "react-router-dom";
import Predict from './Predict';
import Result from './Result';


function App(){


  return (
    <div className="App">

<Router>
  <Switch>
  <Route path="/results">
    <Result/>   
  </Route>

  <Route path="/predict">
    <Predict/>   
  </Route>

  <Route path="/">
  
  <Start/>
      <Timeline/>
      <AI/>
      <Simplify/>
      <Footer/>

  </Route>
  </Switch>
    

</Router>

    </div>
  );
}
export default App



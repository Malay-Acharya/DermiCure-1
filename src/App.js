import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route }from "react-router-dom";
import Footer from './Components/Footer/Footer'
import Start from './Components/Start/Start';
import Timeline  from './Components/Timeline/Timeline';
import AI from './Components/AI/AI';
import Simplify from './Components/Simplify/Simplify';
import Predict from './Components/Predict/Predict';
import Result from './Components/Result/Result';


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



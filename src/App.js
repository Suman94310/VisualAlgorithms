import React from 'react';
import './App.css';
import {HashRouter, BrowserRouter, Switch, Route} from 'react-router-dom'

// material ui imports

// importing routes
import Sorting from "./routes/Sorting"
import Home from "./routes/Home"
import Searching from "./routes/Searching"

// importing components
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>
            <div>
            <Switch>
              <Route exact path = "/" render = {() =><Home/>}/>
              <Route exact path = "/home" render = {() =><Home/>}/>
              <Route exact path="/sorting-visualiser#/" render = {() =><Sorting/>}/>
              <Route exact path = "/searching-visualiser" render = {()=><Searching/>}/>
            </Switch>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;

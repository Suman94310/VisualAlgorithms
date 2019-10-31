import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

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
          <Route exact path = "/" render = {() =><Home/>}/>
          <Route exact path = "/home" render = {() =><Home/>}/>
          <Route path="/sorting-visualiser" render = {() =><Sorting/>}/>
          <Route path = "/searching-visualiser" render = {()=><Searching/>}/>
        </BrowserRouter>
    </div>
  );
}

export default App;

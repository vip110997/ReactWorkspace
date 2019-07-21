import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Post from './components/Post'

//git testing

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/:postId" component={Post}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;

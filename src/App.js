import React, { useState } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import Logo from './logo.svg';
import './App.css';

const App = ({context, location }) => {
  const [ title, setTitle ] = useState('My New Title');

  return (
    <div className="App" alt="">
      <img src={Logo} className="App-logo"/>
        <h1>{title}</h1>
        <div>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/about">About</Link>&nbsp;
          <Link to="/contact">Contact</Link>&nbsp;
        </div>
        <Switch>
          <Route path="/" exact component={ ()=> <h1>Home</h1> } />
          <Route path="/about" exact component={ ()=> <h1>About</h1> } />
          <Route path="/contact" exact component={ ()=> <h1>Contact</h1> } />
        </Switch>
    </div>
  );
};

export default App;

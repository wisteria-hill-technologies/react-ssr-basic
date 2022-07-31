import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import Logo from './logo.svg';
import './App.scss';
import { Button } from 'reactstrap';
import Editor from './Editor';

const App = ({ store }) => {
  const [ title, setTitle ] = useState('My New Title');
  const [ count, setCount ] = useState(0);
  const [ message, setMessage ] = useState(store || '');
  useEffect(()=> {
    fetch('/api/hello').then((res) => res.json()).then(({ greeting }) => setMessage(greeting));
  }, []);

  return (
    <div className="App" alt="">
      <img src={Logo} className="App-logo"/>
        <h1>{title}</h1>
        <p>original store from server: {store}</p>
      <p>Window.store: {typeof window !== 'undefined' && window.store}</p>
      <p>My Message: {message}</p>
      <div className="p-4">
        <Button color="success" onClick={()=> setCount((prev) => prev +1)}>Bootstrap Button: Add Count</Button>
          <p>Count: { count }</p>
      </div>
      <div className="p-4">
        <Editor />
      </div>
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

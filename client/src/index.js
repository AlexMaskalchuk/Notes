import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Note from './Note';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
    <Route exact path ='/' component = {Home}/>
      <Route  path ='/Home' component = {Home}/>
      <Route  path ='/Note/:id' component = {Note}/>
    </Switch>
  </BrowserRouter>

), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

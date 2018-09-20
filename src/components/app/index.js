import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

// import Landing from '../landing';
// import Projects from '../projects';
// import Drawings from '../drawings';
// import About from '../about';
// import Footer from '../footer';

// import '../../style/reset.scss';
// import './app.scss';

import Landing from '../landing';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <ul>
            <li><Link to='/'>Home</Link></li>
          </ul>
          <Switch>
            <Route path='/' component={ Landing }/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}
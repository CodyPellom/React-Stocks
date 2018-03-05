import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import Stock from './components/Stock'
import About from './components/About'


class App extends Component {
  render() {
    return (
      <div>
        <header><p>Hello???</p></header>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/stocks' component={Stock}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/stocks/:symbol' component={Dashboard}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

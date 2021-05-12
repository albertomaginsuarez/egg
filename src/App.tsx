import React from 'react';

import {
  Route, 
  BrowserRouter as Router, 
  Switch
} from 'react-router-dom'

import List from './components/List'
import Character from './components/Character'

function App() {
  return (
    <Router>
      <header className="App-header"></header>
      <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/character" component={Character} />          
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Rockets />
      </Route>
      <Route path="/missions">
        <Missions />
      </Route>
    </Switch>
  </Router>
);

export default App;

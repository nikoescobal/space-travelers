import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Missions from './pages/Missions';
import Profiles from './pages/Profiles';
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
      <Route path="/my-profile">
        <Profiles />
      </Route>
    </Switch>
  </Router>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Missions from './pages/Missions';
import Profiles from './pages/Profiles';
import Rockets from './pages/Rockets';
import Dragons from './pages/Dragons';

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
      <Route exact path="/dragons">
        <Dragons />
      </Route>
    </Switch>
  </Router>
);

export default App;

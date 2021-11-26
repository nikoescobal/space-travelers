import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Missions from './pages/Missions';
import { DragonProfile, RocketProfile } from './pages/Profile';
import Rockets from './pages/Rockets';
import Dragons from './pages/Dragons';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Rockets} />
      <Route path="/missions" component={Missions} />
      <Route path="/my-profile" component={RocketProfile} />
      <Route path="/my-profile" component={DragonProfile} />
      <Route exact path="/dragons" component={Dragons} />
    </Switch>
  </Router>
);

export default App;

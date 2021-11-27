import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Missions from "./components/Missions";
import Profile from "./components/Profile";
import Rockets from "./components/Rockets";
import Dragons from "./components/Dragons";

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Rockets} />
      <Route path="/missions" component={Missions} />
      <Route path="/my-profile" component={Profile} />
      <Route exact path="/dragons" component={Dragons} />
    </Switch>
  </Router>
);

export default App;

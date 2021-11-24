import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Missions from "./pages/Missions";
import Profiles from "./pages/Profiles";
import Rockets from "./pages/Rockets";
import Dragons from "./pages/Dragons";

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Rockets} />
      <Route path="/missions" component={Missions} />
      <Route path="/my-profiles" component={Profiles} />
      <Route exact path="/dragons" component={Dragons} />
    </Switch>
  </Router>
);

export default App;

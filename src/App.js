import { Route, Switch } from 'react-router-dom';
import Rockets from './pages/Rockets';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Rockets} />
    </Switch>
  );
}

export default App;

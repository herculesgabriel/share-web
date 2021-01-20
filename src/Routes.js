import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateMessage from './pages/CreateMessage';
import About from './pages/About';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create-message" component={CreateMessage} />
      <Route exact path="/About" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

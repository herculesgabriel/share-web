import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateMessage from './pages/CreateMessage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create-message" component={CreateMessage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

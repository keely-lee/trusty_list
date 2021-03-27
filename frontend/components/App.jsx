import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Greeting from './greeting';
import List from './list_home';


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Greeting} />
        <ProtectedRoute path="/lists/:id" component={List} />
      </Switch>
    </div>
  )
}

export default App;
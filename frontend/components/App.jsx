import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Greeting from './greeting';


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Greeting} />
        
      </Switch>
    </div>
  )
}

export default App;
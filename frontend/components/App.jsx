import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Greeting from './greeting';
import Modal from './modal';
import List from './list_home';


const App = (props) => {
  // console.log(props)
  // console.log("props in app")
  return (
    <div id="App">
      <Modal/>
      <Switch>
        <Route exact path="/" component={Greeting} />
        <ProtectedRoute path="/lists/:id" component={List} />
      </Switch>
    </div>
  )
}

export default App;
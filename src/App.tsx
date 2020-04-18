import React from 'react';
import Login from './components/login/Login';
import Home from './components/home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Login} />
          <Route exact={true} path='/home' component={Home} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;

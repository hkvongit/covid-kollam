import React from 'react';
import Dashboard from './components/pages/Dashboard'
import About from './components/pages/About'
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/about" exact component={About} />
        {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
        {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
        {/* <Route component={SignIn} /> */}
      </Switch>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;

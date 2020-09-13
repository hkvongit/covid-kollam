import React from 'react';
import Dashboard from './components/pages/Dashboard'
import ContainmantZones from './components/pages/ContainmentZones'
import About from './components/pages/About'
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/multicellular/NavBar'
import {
  DASHBOARD_PAGE,
  CONTAINMENT_ZONE_PAGE,
  ABOUT_PAGE
} from './components/constants/NumberConstants'
import './App.css';


function App(props) {
  const [currentPage, setCurrentPage] = React.useState(DASHBOARD_PAGE)
  const findActivePage = () => {
    let path = props.history.location.pathname
    switch (path) {
      case '/':
        return (DASHBOARD_PAGE)
      case '/about':
        return (ABOUT_PAGE)
      case '/containment-zones':
        return (CONTAINMENT_ZONE_PAGE)
    }
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/about" exact component={About} />
        <Route path="/containment-zones" exact component={ContainmantZones} />
      </Switch>
      <NavBar activePage={findActivePage()} history={props.history} />
    </div>
  );
}

export default App;

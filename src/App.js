import React from 'react';
import './App.css';
import Home from './pages/Home'
import Phones from './pages/Phones'
// import Rooms from './pages/Rooms'
import SinglePhone from './pages/SinglePhone'
// import Error from './pages/Error'
import { Route, Switch } from 'react-router-dom'
import  NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/phones/" component={Phones}/>
      {/* room-name below will be the name of the room, to view a specific page */}
      <Route exact path="/phones/:slug" component={SinglePhone}/>
      <Route component={Error} />
    </Switch>
    
    </>
  );
}

export default App;

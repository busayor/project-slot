import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Phones from './pages/Phones'
import Login from './pages/Login'
import Cart from  './components/Cart'
import SinglePhone from './pages/SinglePhone'
import { Route, Switch } from 'react-router-dom'
import Error from './pages/Error'
import  NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/phones/" component={Phones}/>
      <Route  path="/login/" component={Login}/>
      <Route  path="/cart/" component={Cart}/>
       <Route  path="/phones/:slug" component={SinglePhone}/>
      <Route component={Error} /> 
    </Switch>
    
    </>
  );
}

export default App;

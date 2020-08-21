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
import Footer from './components/Footer'

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/phones/" component={Phones}/>
      <Route exact path="/login/" component={Login}/>
      <Route exact path="/cart/" component={Cart}/>
       <Route exact path="/phones/:slug" component={SinglePhone}/>
      <Route component={Error} /> 
    </Switch>
    <Footer/>
    
    </>
  );
}

export default App;

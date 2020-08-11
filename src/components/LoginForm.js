import React, { useState, useContext } from "react";
import Title from "./Title";
import {Link} from 'react-router-dom'
import userData from '../userData'
import {useHistory} from 'react-router-dom'
import {ShopContext} from '../Context'

// import "./Login.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {handleUserData} = useContext(ShopContext)

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  let history = useHistory()

  function handleSubmit(event) {
    event.preventDefault();
    
    if(userData.filter((user) => user.email === email && user.password === password).length > 0){
      localStorage.setItem('email', email)
      handleUserData(email)
      history.push("/cart")
      // console.log(localStorage.getItem('email'))
    }
    else {
      // console.log("error")
      alert("Invalid email and/or password");
    }

  }

  

  return (
    <section className="filter-container">
      <Title title="login area"/>
      <form className="filter-form" onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={email}
          autoFocus
          onChange={e => {
            localStorage.setItem('email', e.target.value)
            setEmail(e.target.value)}
          } 
        />
        </div>
        <div className="form-group">
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          value={password}
          autoFocus            
          onChange={e => setPassword(e.target.value)}
        />
        </div>
        <div className="form-group">
          <br/>
            <button 
              className="btn-primary" 
              type="submit" 
              name="submit" 
              id="submit" 
              disabled={!validateForm()} >login</button>
              <br/>
              <Link to={`/signup`} className="btn-primary room-link">
                <h3>Sign me up!</h3>
              </Link>
              <h5>Sign me up!</h5>
        </div>
      </form>
    </section>
  );
}
import React, { useState, useContext } from "react";
import Title from "./Title";
import {Link} from 'react-router-dom'
import userData from '../userData'
import {useHistory} from 'react-router-dom'
import {ShopContext} from '../Context'
import '../Login.css'
import { FaLock } from "react-icons/fa";

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

  //   <div className="container-fluid">
  //   <br/>
  //   <Title title="login area"/>
  //   <form className="filter-form" onSubmit={handleSubmit}>
  //     <div className="form-group">
  //     <label htmlFor="email">email</label>
  //     <input
  //       type="email"
  //       name="email"
  //       id="email"
  //       className="form-control"
  //       value={email}
  //       autoFocus
  //       onChange={e => {
  //         localStorage.setItem('email', e.target.value)
  //         setEmail(e.target.value)}
  //       } 
  //     />
  //     </div>
  //     <div className="form-group">
  //     <label htmlFor="password">password</label>
  //     <input
  //       type="password"
  //       name="password"
  //       id="password"
  //       className="form-control"
  //       value={password}
  //       autoFocus            
  //       onChange={e => setPassword(e.target.value)}
  //     />
  //     </div>
  //     <div className="form-group">
  //       <br/>
  //         <button 
  //           className="btn-primary" 
  //           type="submit" 
  //           name="submit" 
  //           id="submit" 
  //           disabled={!validateForm()} >login</button>
  //           <br/>
  //           <Link to={`/signup`} className="btn-primary room-link">
  //             <h3>Sign me up!</h3>
  //           </Link>
  //           <h5>Sign me up!</h5>
  //     </div>
  //   </form>
  // </div>





  // <div class="container">
  //   <div class="row">
  //     <div class="col-md-6 col-md-offset-3">
  //       <div class="panel panel-login">
  //         <div class="panel-heading">
  //           <div class="row">
	// 						<div class="col-xs-6">
	// 							<a href="#" class="active" id="login-form-link">Login</a>
	// 						</div>
	// 						<div class="col-xs-6">
	// 							<a href="#" id="register-form-link">Register</a>
	// 						</div>
	// 					</div>
	// 					<hr/>
  //         </div>
  //         <div class="panel-body">
  //           <div class="row">
  //             <div class="col-lg-12">
  //             <form id="login-form" method="post" role="form" style={{display: 'block'}}>
	// 								<div class="form-group">
	// 									<input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value=""/>
	// 								</div>
	// 								<div class="form-group">
	// 									<input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password"/>
	// 								</div>
	// 								<div class="form-group text-center">
	// 									<input type="checkbox" tabindex="3" class="" name="remember" id="remember"/>
	// 									<label for="remember"> Remember Me</label>
	// 								</div>
	// 								<div class="form-group">
	// 									<div class="row">
	// 										<div class="col-sm-6 col-sm-offset-3">
	// 											<input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In"/>
	// 										</div>
	// 									</div>
	// 								</div>
	// 								<div class="form-group">
	// 									<div class="row">
	// 										<div class="col-lg-12">
	// 											<div class="text-center">
	// 												<a href="#" tabindex="5" class="forgot-password">Forgot Password?</a>
	// 											</div>
	// 										</div>
	// 									</div>
	// 								</div>
	// 							</form>
  //               <form id="register-form" method="post" role="form" style={{display: 'none'}}>
	// 								<div class="form-group">
	// 									<input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value=""/>
	// 								</div>
	// 								<div class="form-group">
	// 									<input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value=""/>
	// 								</div>
	// 								<div class="form-group">
	// 									<input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password"/>
	// 								</div>
	// 								<div class="form-group">
	// 									<input type="password" name="confirm-password" id="confirm-password" tabindex="2" class="form-control" placeholder="Confirm Password"/>
	// 								</div>
	// 								<div class="form-group">
	// 									<div class="row">
	// 										<div class="col-sm-6 col-sm-offset-3">
	// 											<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now"/>
	// 										</div>
	// 									</div>
	// 								</div>
	// 							</form>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  




  <div class="container">
    <div class="omb_login">
      <h3 class="omb_authTitle">Login or <a href="#">Sign up</a></h3>
      <div class="row omb_row-sm-offset-3 omb_socialButtons">
    	    <div class="col-xs-4 col-sm-2">
		        <a href="#" class="btn btn-lg btn-block omb_btn-facebook">
			        <i class="fa fa-facebook visible-xs"></i>
			        <span class="hidden-xs">Facebook</span>
		        </a>
	        </div>
        	<div class="col-xs-4 col-sm-2">
		        <a href="#" class="btn btn-lg btn-block omb_btn-twitter">
			        <i class="fa fa-twitter visible-xs"></i>
			        <span class="hidden-xs">Twitter</span>
		        </a>
	        </div>	
        	<div class="col-xs-4 col-sm-2">
		        <a href="#" class="btn btn-lg btn-block omb_btn-google">
			        <i class="fa fa-google-plus visible-xs"></i>
			        <span class="hidden-xs">Google+</span>
		        </a>
	        </div>	
		  </div>
      <div class="row omb_row-sm-offset-3 omb_loginOr">
			  <div class="col-xs-12 col-sm-6">
				  <hr class="omb_hrOr"/>
				  <span class="omb_spanOr">or</span>
			  </div>
		  </div>
      <div class="row omb_row-sm-offset-3">
			<div class="col-xs-12 col-sm-6">	
			    {/* <form class="omb_loginForm" action="" autocomplete="off" method="POST"> */}
          <form className="omb_loginForm" onSubmit={handleSubmit}>
					<div class="input-group">
						{/* <span class="input-group-addon"><i class="fa fa-user"></i></span> */}
            <input type="email" 
            class="form-control" 
            name="email" 
            value={email}
            placeholder="email address" 
            autoFocus
            onChange={e => {
            localStorage.setItem('email', e.target.value)
            setEmail(e.target.value)}}
          />
					</div>
					<span class="help-block"></span>
										
					<div class="input-group">
						{/* <span class="input-group-addon"><FaLock/></span> */}
            <input  
              type="password" 
              class="form-control" 
              name="password" 
              autoFocus
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
					</div>
                    {/* <span class="help-block">Password error</span> */}

          <button 
            class="btn btn-lg btn-primary btn-block" 
            type="submit"
            id="submit"
            disabled={!validateForm()}
          >
              Login</button>
				</form>
			</div>
    	</div>
      <div class="row omb_row-sm-offset-3">
			<div class="col-xs-12 col-sm-3">
				<label class="checkbox">
					<input type="checkbox" value="remember-me"/>Remember Me
				</label>
			</div>
			<div class="col-xs-12 col-sm-3">
				<p class="omb_forgotPwd">
					<a href="#">Forgot password?</a>
				</p>
			</div>
		</div>
    </div>
  </div>
  );
}
import React, { useState } from 'react';
import Header from "../Components/Header/index";
import { Grid } from '@mui/material';
import "./style.module.css";

function Signup() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (

    <Grid>
        <Header />
    <div className="container" id="container">
      <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
        <form>
          <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
          <div className="social-icons" >
            <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fab fa-github"></i></a>
            <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
          {isSignUp && <span>or use your email for registration</span>}
          {isSignUp && <input type="text" placeholder="Name" />}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {isSignUp ? <button>Sign Up</button> : <button>Sign In</button>}
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel ${isSignUp ? 'toggle-left' : 'toggle-right'}`}>
            <h1>{isSignUp ? 'Welcome Back!' : 'Welcome, Friend!'}</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" onClick={toggleForm}>{isSignUp ? 'Sign In' : 'Sign Up'}</button>
          </div>
          <div className={`toggle-panel ${isSignUp ? 'toggle-right' : 'toggle-left'}`}>
            <h1>{isSignUp ? 'Welcome, Friend!' : 'Welcome Back!'}</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" onClick={toggleForm}>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
          </div>
        </div>
      </div>
    </div>
    </Grid>
  );
}

export default Signup;

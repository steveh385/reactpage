import React from 'react';
import SignUpButton from './SignUpButton';
import Burger from './Burger';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
    return(
      <div className="NavBar navbar navbar-light  bg-light static-top">
        <Link className="logo" to="/"><i class="fas fa-running"></i> </Link>
        <Burger />
        <SignUpButton>Sign Up</SignUpButton>  
      </div>
    
    )
  }

export default NavBar;


/*<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>    
    </ul>
  </div>  
</nav>*/
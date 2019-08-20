import React, {useContext} from 'react';
import SignUpButton from './SignUpButton';
import LogOutButton from './LogOutButton';
import { Link } from 'react-router-dom'; 
import { AppContext } from './App';


const NavBar = () => {

    const [state, setState] = useContext(AppContext);

    return(
      <div className="NavBar navbar navbar-light bg-light static-top">
        <div className="nav-links container">
          <Link className="logo" to="/"><i class="fas fa-running"></i></Link>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to='/contact'>Contact</Link>
          <Link className="link" to="/feeds">Feeds</Link>
          { !state.userName && <SignUpButton>Sign Up</SignUpButton> }
          { state.userName && <LogOutButton>Log Out</LogOutButton> }
        </div>
      </div>
    )
  }

export default NavBar;

/*import React from 'react';
import SignUpButton from './SignUpButton';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
    return(
      <div className="NavBar navbar navbar-light bg-light static-top">
        <div className="nav-links container">
          <Link className="logo" to="/"><i class="fas fa-running"></i> </Link>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to='/contact'>Contact</Link>
          <Link className="link" to="/feeds">Feeds</Link>
          <SignUpButton>Sign Up</SignUpButton>
        </div>
      </div>
    )
  }

export default NavBar;*/


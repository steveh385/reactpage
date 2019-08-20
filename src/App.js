import React, {useState, useEffect, createContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';

import Feeds from './Feeds';
import Contact from './Contact';

import './App.css';


export const AppContext = createContext();

const App = () => {

    useEffect(() => {
        switch(state.loginStatus){
        case true:

            localStorage.setItem('name', 'asdasd');
            localStorage.setItem('token', state.userToken);
        case false:
            localStorage.clear();
        default:
        break;
        }
        console.log(state, localStorage);

    });

const [state, setState] = useState({ 
    signUpForm: true,
    loginStatus: localStorage.name ? true : false,
    userName: null,
    userToken: null
 });

console.log('state', state)


    return (
        <AppContext.Provider value={[state, setState]}>
        <BrowserRouter>
         <Switch>
          < Route path="/" exact component={Home} />
          < Route path="/About" component={About} />
          < Route path="/Contact" component={Contact} />
          < Route path="/Feeds" component={Feeds} />            
         </Switch>
        </BrowserRouter>
        </AppContext.Provider>
        
    )
}


export default App;
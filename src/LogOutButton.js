import React, { useContext, useEffect } from 'react';
import Button from './Button';
import { AppContext } from './App'


// Note:
// Use 'useContext' if outside JSX
// use 'AppContext.Consumer' if inside JSX

const LogOutButton = (prop) => {

    // global state
    const [state, setState] = useContext(AppContext);

    const logOutUser = () => {
        setState({
            ...state,
            loginStatus: false,
            userName: null,
            userToken: null
        })
    }

    return (
        <Button clickFunction={logOutUser} className="link">{prop.children}</Button>
    )
}

export default LogOutButton;
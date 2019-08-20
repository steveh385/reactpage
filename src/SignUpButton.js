import React, { useContext, useEffect } from 'react';
import Button from './Button';
import { AppContext } from './App'


// Note:
// Use 'useContext' if outside JSX
// use 'AppContext.Consumer' if inside JSX

const SignUpButton = (prop) => {

    // useContext will give the values from context
    const [state, setState] = useContext(AppContext);
    const openWindow = () => {
        setState({ ...state, signUpForm: true });
    }

    return (
        <Button clickFunction={openWindow} className="link">{prop.children}</Button>
    )
}

export default SignUpButton;
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from './App'; 

const LoginWindow = () => {

    let email;
    let password;

    const [state, setState] = useContext(AppContext);

    const [localState, setLocalState] = useState({
        successMessage: false,
        errorMessage: false
    });

    const closeWindow = () => {
        setState({ ...state, signUpForm: false })
    };

    const loginUser = () => {

        let formData = {
            email: email.value,
            password: password.value
        }
        // Use fetch retrieve JWT
        fetch(
            `${process.env.REACT_APP_API_URL}auth/login`, 
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {"Content-Type": "application/json"}
            }
        ).then(async res=>{
            if(!res.ok) {
                setLocalState({ 
                    ...localState, 
                    successMessage: false, 
                    errorMessage: true 
                })
            } else {
                let userInfo = await res.json();

                // Show the success message when logged in
                setLocalState({ 
                    ...localState, 
                    successMessage: true, 
                    errorMessage: false 
                });

                setState({ 
                    ...state, 
                    signUpForm: false, 
                    loginStatus: true,
                    userName: userInfo.name,
                    userToken: userInfo.token
                });
            }
        })
    }


    return(<div className="LoginWindow">
    <div className="container">

        <label>Email</label>
        <input ref={comp=> email = comp} type="text" className="form-control" />

        <label>Password</label>
        <input ref={comp=> password = comp} type="password" className="form-control" />

        <button onClick={loginUser} className="btn btn-primary">Login</button>
        <button onClick={closeWindow} className="btn btn-danger">Cancel</button>

        {
            localState.successMessage && 
            <div className="alert alert-success">
                Congratulations! You've been successfully logged up.
            </div>
        }

        {
            localState.errorMessage && 
            <div className="alert alert-danger">
                Sorry! No user with email or password exists.
            </div>
        }
    </div>
</div>)
}

export default LoginWindow;
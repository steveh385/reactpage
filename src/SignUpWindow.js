import React, { useContext, useState } from 'react';
import { AppContext } from './App'; 

const SignUpWindow = () => {

    console.log(process.env.REACT_APP_API_URL)
    let name;
    let email;
    let password;
    let gender;

    const [localState, setLocalState] = useState({
        successMessage: false,
        errorMessage: false
    })
    const [state, setState] = useContext(AppContext);

    const registerUser = () => {

        let formData = {
            name: name.value,
            email: email.value,
            password: password.value,
            gender: gender.value
        }
        fetch(
            // URL
            `${process.env.REACT_APP_API_URL}auth/register`,  
            // Data
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {"Content-Type": "application/json"}
            }
        )
        .then(res => {

            // If the client makes BAD request
            if(!res.ok) {
                // Handle the error
                setLocalState({ 
                    ...localState, 
                    successMessage: false,
                    errorMessage: true
                })

            } 
            // Else if request is successful
            else {
                // Parse json data 
                res.json();

                // Show success message
                setLocalState({ 
                    ...localState, 
                    successMessage: true,
                    errorMessage: false
                })
            }
        }) 

        // If the request makes it to the backend
        .catch(err => {
            console.log('err', err);
        })
    }
    const closeSignUp = () => {
        setState({ ...state, signUpForm: false })
    }
    return(<div className="SignUpWindow">
        <div className="container">

            <label>Name</label>
            <input ref={comp=> name = comp} type="text" className="form-control"/>

            <label>Password</label>
            <input ref={comp=> password = comp} type="password" className="form-control" />

            <label>Email</label>
            <input ref={comp=> email = comp} type="text" className="form-control" />

            <label>Gender</label>
            <input ref={comp=> gender = comp} type="text" className="form-control" />
            
            <button onClick={registerUser} className="btn btn-primary">Register</button>
            <button onClick={closeSignUp} className="btn btn-danger">Cancel</button>

            {
                localState.successMessage && 
                <div className="alert alert-success">
                    Congratulations! You've been successfully signed up.
                </div>
            }

            {
                localState.errorMessage && 
                <div className="alert alert-danger">
                    Sorry! You have FAILED!
                </div>
            }
        </div>
    </div>)
}

export default SignUpWindow;
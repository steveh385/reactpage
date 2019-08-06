import React, { useContext, useState } from 'react';
import { AppContext } from './App'; 

const SignUpWindow = (prop) => {

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
            if(res.status === "400") {
                // Handle the error
                setLocalState({ 
                    ...localState, 
                    successMessage: false,
                    errorMessage: true
                })

            } else {
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
        .catch(err => {
            console.log('err', err);
        })
    }
    const closeSignUp = () => {
        setState({ signUpForm: false })
    }
    return(<div className="SignUpWindow">
        <div className="container">
            <h2>Register</h2>

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
            <a onClick={prop.panelFunction}>Already a user? Signin</a>

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
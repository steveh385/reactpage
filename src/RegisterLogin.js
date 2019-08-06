import React, {useState} from 'react';
import SignUpWindow from './SignUpWindow';
import LoginWindow from './LoginWindow';



const RegisterLogin = () => {

    const [localState, setLocalState] = useState({ registerPanel: true});
    const changePanel = () => {
        if (localState.registerPanel){
            setLocalState({...localState, registerPanel:false})
        }else {
            setLocalState({...localState, registerPanel:true})
        }
        
    }

    return (
        <div className="RegisterLogin">
            <div className="container">
                
                {localState.registerPanel && <SignUpWindow panelFunction = {changePanel} />}
                
                {!localState.registerPanel && <LoginWindow panelFunction = {changePanel} />}
            </div>
        </div>
    )
}

export default RegisterLogin;
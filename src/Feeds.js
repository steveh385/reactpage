import React, {useContext} from 'react';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import RegisterLogin from './RegisterLogin';
import FeedMedia from './FeedMedia';
import { AppContext } from './App';
import SignUp from './SignUp';
import Footer from './Footer';

const Feeds = () => {

    const [state, setState] = useContext(AppContext)

    return (
        <div className="Feeds">
            <NavBar />
            <Jumbotron img="img/feedsfitness.jpg"/>
            <div className="container">
                <h1>The Feeds Page</h1>
                {
                  !state.user.length === 0 &&
                  <div>
                    <FeedMedia />
                    <FeedMedia />
                    <FeedMedia />
                    
                </div>
                }
            </div>
            <SignUp img="img/bg-masthead.jpg" />
            <Footer />
            {state.signUpForm && <RegisterLogin />}
        </div>
    )
}

export default Feeds;
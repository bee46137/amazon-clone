import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';


const Login = () => {

  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");

  const history = useHistory();

    const signIn = (e) => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email, password).then((auth) => 
        {history.push('/Home')})
        .catch(error => alert(error.message));
    };

    const register = e => {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password).then((auth) => {
        if(auth) {
          history.push('/');
        }
      }).catch(error => alert(error.message));
    }

 
  return (
    <div className="login">

        <Link to = "/Home">
          <img className='login-logo'
          src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg"
          alt='"Amazon logo'
          />
        </Link>

        <div className='login-container'>
          <h4>Sign In</h4>
          <form>
              <h4>Email: </h4>
              <input 
                type='text' 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder='Enter your email address here...' 
              />
                    <h4>Password: </h4>
              <input 
                type='password' 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                placeholder='Enter your password...' 
                />

              <button type='submit' className='login-sign-in-button' onClick={signIn}>Sign In</button>
          </form>
          <p>
            By signing in you agree to AMAZON FAKE CLONE Conditions of use & sale. Please
            see our privacy notice, our cookie policy and our internet based ads notice.
          </p>
          <button 
            className='create-account-button'
            onClick={register}>Create FAKE Amazon account</button>
        </div>
    </div>
  )
}

export default Login;
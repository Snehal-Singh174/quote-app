import React from 'react';
import './App.css';

function Login (props) {

    const { email, setEmail,password, setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailerror,passworderror} = props;
    // eslint-disable-next-line
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailerror}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passworderror}</p>
                <div className="btnContainer">
                    { hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign In</button>
                        <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )} 
                </div>
            </div>
        </section>
    )
}

export default Login;
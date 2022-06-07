import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

import Loading from '../../components/Loading';

import './form.scss';

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {   

    if (loading) return;
    if (user) return(
      navigate("/dashboard")
      );
  }, [user, loading]);

  return (
    <>
    <Loading name="Login" small="#STOP UKRAINE WAR">
    <div className="page-container">
    <div className="form-container">
      <div className="center-block">
        <div className="form">
          <div className="header-form">
            <h2 className="font_70_bold">Hello Again!</h2>
          </div>

        <div className="links-form">
          <Link className="link-under font_16_bold" to="/login">Sign in</Link>
          <Link className="font_16_bold" to="/signup">Sign up</Link>
        </div>

        <label>
        <span className="font_16_regular">Email address *</span>
        <input
          type="text"
          className="light"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        </label>
        <label>
        <span className="font_16_regular">Password *</span>
        <input
          type="password"
          className="light"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        </label>

        <div className="flex-beetwen block-btn-form">
          <div className="flex-start">
            <button
              className="btn btn-black"
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
            <button className="btn btn-google" onClick={signInWithGoogle}>
              <img src="https://freesvg.org/img/1534129544.png"/>
              Sign in with Google
            </button>
          </div>
          <div>
          <Link to="/reset-password">Forgot Password</Link>
        </div>

        </div>
       
      </div>
    </div>
    </div>
    </div>
    </Loading>
    </>
  );
}

export default Login;
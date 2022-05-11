import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import './../../resource/style/main.scss';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import "./form.scss";

import Loading from '../../components/Loading';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();


  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {

    if (loading) return;
    if (user) return (
      navigate("/dashboard")
      );
  }, [user, loading]);

  return (
    <>
    <div className="page-container">
      <div className="form-container">
          <div className="center-block">
              <div className="form">
                <div className="header-form">
                <h2 className="font_70_bold">Create you account</h2>
                </div>

                <div className="links-form">
                <Link className="font_16_bold" to="/login">Sign in</Link>
                <Link className="link-under font_16_bold" to="/signup">Sign up</Link>
                </div>

              <label>
                <span className="font_16_regular">Full name *</span>
                <input
                  type="text"
                  className="light"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
                </label>

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

                <p className="font_14_regular policy">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a className="font_14_bold">privacy policy</a>.
                </p>
                <div className="flex-start block-btn-form">
                <button className="btn btn-black" onClick={register}>
                  Register
                </button>
                <button
                  className="btn btn-google"
                  onClick={signInWithGoogle}
                >
                  <img src="https://freesvg.org/img/1534129544.png"/>
                  <span>Sign up with Google</span>
                </button>
              </div>
              </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default Signup;
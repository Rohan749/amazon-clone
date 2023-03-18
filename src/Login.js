import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import "./Login.css";

const Login = () => {

  //As I read the docs, previously in order to navigate, we used useHistory, but now useNavigate.
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();


  const signIn = (event) => {
    event.preventDefault(app);
    // FIREBASE SignIn WORK WILL BE DONE HERE Yaad rakhne ka jaroorat ny h.
    // Firebase docs se update rakho.

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if(auth) {
        history("/")
      }
    })
    .catch((error) => {
      // const errorCode = error.code;
      if(error.code == "auth/invalid-email")
      alert("This email is not registered in firebase")
    })
  };

  const signInwithGoogle = (event) => {
    event.preventDefault();

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    if(auth) {
      history("/")
    }
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  }

  const register = (event) => {
    event.preventDefault();

    // Firebase Registration will be done here
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Successfully created account")
        if(auth) {
          history("/")
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        if(!auth) {
          alert("You haven't created any account.")
        }
        else {
          alert(errorCode)
          // const errorMessage = error.message;
        }

        // ..
      });
  };

  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG13.png"
            className="login__logo"
          />
        </Link>

        <div className="login__container">
          <h1>SIGN IN</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="login__signInButton"
              type="submit"
              onClick={signIn}
            >
              Sign In
            </button>
            <button
              className="google__signInButton"
              type="submit"
              onClick={signInwithGoogle}
            >
              Sign In with Google
            </button>
          </form>

          <p>
            By Signing-in, you agree to Amazon Clone's Conditions of use and
            sale. Please see our Privacy Notice, our cookiess notices and our
            interest based ads notice.
          </p>

          <button className="login__registerButton" onClick={register}>
            Create your amazon account
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

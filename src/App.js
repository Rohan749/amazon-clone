import { useEffect } from "react"
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";



function App() {

  const auth = getAuth();

  const [{}, dispatch] = useStateValue();


  useEffect(()=> {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {

        const uid = authUser.uid;
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // User is signed out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  },[])

  return (
    <>
      <BrowserRouter>
        <div className="app"> 
          <Routes>
            <Route path="/" element={<><Header /> <Home /></>} />
            <Route path="/checkout" element={<><Header /><Checkout /></>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;


import './App.css';
import Login from './components/authentication/Login';
import React from "react";
import lottie from "lottie-web";
import anim from './lottie/network.json'
import { useEffect } from 'react';
import Homepage from './components/homepage/homepage';


function App() {

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#logoAnimation"),
      animationData: anim,
    });
    return () => lottie.destroy();

  }, []);

  return (
    <div className="App">
      {/* <Login></Login> */}
      <Homepage />
    </div >
  );
}

export default App;

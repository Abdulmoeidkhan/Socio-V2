import React, { useState, useEffect } from 'react';
import MainComponent from "./Main/GlobalEnvironment/mainWrapper"
import firebase from "./Main/GlobalEnvironment/firebaseConfig"
import 'antd/dist/antd.css'
import "./App.css"

function App() {

  const [firebaseInitializes, setfirebaseInitializes] = useState(false)

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setTimeout(function () {
        window.scrollTo(0, 0)
        setfirebaseInitializes(true)
      }, 3000)
    })
  },[])

  return (
    <div className="App">
      {
        firebaseInitializes
          ?
          <style>
            {`
            @media only screen and (max-width: 790px){
            .shutter-Img-Class {
              width: 100%;
              height: 90vh;
              transition: all 1s ease;
              transform: scale(0);
              position:fixed;
            }
          }
          @media only screen and (min-width: 791px){
            .shutter-Img-Class {
              width: 90%;
              height: 90vh;
              transition: all 1s ease;
              transform: scale(0);
              position:fixed;
            }
          }
          .shutter-comp-class{
            transition: all 1s ease;
            transform: scale(1);
          }

          `}
          </style>
          :
          <style>
            {`
          @media only screen and (max-width: 790px){
            .shutter-Img-Class {
              width: 100%;
              height: 90vh;
              transition: all 1s ease;
              transform: scale(1);
              position:fixed;
            }
          }
          @media only screen and (min-width: 791px){
            .shutter-Img-Class {
              width: 90%;
              height: 90vh;
              transition: all 1s ease;
              transform: scale(1);
              position:fixed;
            }
          }
          .shutter-comp-class{
            transition: all 1s ease;
            transform: scale(0);
          }
          `}
          </style>
      }
      <img className="shutter-Img-Class" src="https://res.cloudinary.com/tanzeelah/image/upload/v1596628432/Landing%20Page/Shutter_iaczgg.gif" />
      <div className="shutter-comp-class">
        <MainComponent />
      </div>
      <div className="arrowUpKey" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}><i className="fa fa-x fa-arrow-up" style={{ color: "#fff" }} aria-hidden="true"></i></div>
      <div className="arrowDownKey" onClick={() => { window.scrollTo({ top: 100000, left: 0, behavior: "smooth" }) }}><i className="fa fa-x fa-arrow-down" style={{ color: "#fff" }} aria-hidden="true"></i></div>
    </div>
  )
}

export default App;

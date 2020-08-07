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
        setfirebaseInitializes(true)
      }, 3000)
      console.log(firebaseInitializes)
    })
  })
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [firebaseInitializes])

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
              padding-top: 15vh;
              transition: all 1s ease;
              transform: scale(0);
              position:fixed;
            }
          }
          @media only screen and (min-width: 791px){
            .shutter-Img-Class {
              width: 90%;
              height: 90vh;
              padding-top: 15vh;
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
              padding-top: 15vh;
              transition: all 1s ease;
              transform: scale(1);
              position:fixed;
            }
          }
          @media only screen and (min-width: 791px){
            .shutter-Img-Class {
              width: 90%;
              height: 90vh;
              padding-top: 15vh;
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
    </div>
  )
}

export default App;

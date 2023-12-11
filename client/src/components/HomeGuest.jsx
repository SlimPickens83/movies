import React, { useEffect, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import Axios from "axios"
import { useImmerReducer } from "use-immer"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import admitOne from "../assets/admitOne.png"

function HomeGuest() {
  return (
    <div id="homeGuest">
      <img id="homeGuestImage" src={admitOne} alt="background" />
      <div id="register">
        <h1>Welcome to Your New Movie Library</h1>
        <h6>Already registered? Sign In.</h6>
      </div>
    </div>
  )
}

export default HomeGuest

import React, { useEffect, useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import Axios from "axios"
import { useImmerReducer } from "use-immer"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import admitOne from "../assets/admitOne.png"

function HomeGuest() {
  const appDispatch = useContext(DispatchContext)
  // const [username, setUsername] = useState()
  // const [password, setPassword] = useState()
  // const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    // for dev test sign-in

    appDispatch({ type: "login" })

    // try {
    //   const response = await Axios.post("/login", { username, password })

    //   if (response.data) {
    //     appDispatch({ type: "login", data: response.data })
    //     navigate("/Home")
    //   } else {
    //     console.log("Incorrect username or password.")
    //   }
    // } catch (e) {
    //   console.log("Undetermined login error.")
    //   console.log({ e })
    // }
  }

  return (
    <div id="homeGuest">
      <img id="homeGuestImage" src={admitOne} alt="background" />
      <div id="loginContainer">
        <h1>Movie Library Plus</h1>
        <div id="login">
          <h2>Login</h2>
          <Form onSubmit={handleSubmit} id="login">
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeHolder="Username" onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeHolder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
          </Form>
          <Button id="loginSubmit" type="submit">
            Submit
          </Button>
        </div>
        <h6>New user? Register here.</h6>
        <Form onSubmit={handleSubmit} id="devTest">
          <h5>Dev Testing Sign-In</h5>
          <Button id="devSign" type="submit">
            Sign-In
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default HomeGuest

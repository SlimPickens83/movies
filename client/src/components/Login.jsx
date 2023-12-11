import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import DispatchContext from "../DispatchContext"

function Login() {
  const appDispatch = useContext(DispatchContext)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  return (
  
  )
}

export default Login

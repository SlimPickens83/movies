import { useContext } from "react"
import DispatchContext from "../DispatchContext"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function Home() {
  const appDispatch = useContext(DispatchContext)
  function handleSubmit(e) {
    e.preventDefault()
    appDispatch({ type: "logout" })
  }
  return (
    <div id="profile">
      <h1 id="proName">John Smith</h1>
      <div id="collection"></div>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">Sign Out</Button>
      </Form>
    </div>
  )
}

export default Home

import { useContext, useState } from "react"
import DispatchContext from "../DispatchContext"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import Thumbnail from "./Thumbnail"

// Mock data for film library

const drama = { key: 0, title: "Dramatic Movie", director: "dir. Jill Smith", summary: "A heartwarming tale of the courage and humanity that defines us all. Rated NC-17." }
const comedy = { key: 1, title: "Comedy Movie", director: "dir. John Doe", summary: "Unlikely friends go on an arbitrary road trip with hilarious consequences. Not Rated." }
const horror = { key: 2, title: "Horror Movie", director: "dir. Jim Raven", summary: "A tale of the macabre so odious it's been banned in North Korea and Saudi Arabia. Rated G." }

const library = [drama, comedy, horror]

function Home() {
  const appDispatch = useContext(DispatchContext)
  // const [films, setFilms] = useState([])

  function handleAddFilm(e) {
    e.preventDefault()
    alert("Add film feature coming soon.")
  }

  function handleLogoutSubmit(e) {
    e.preventDefault()
    appDispatch({ type: "logout" })
  }

  return (
    <div id="profileContainer">
      <div id="profile">
        <h1 id="proName">John Smith</h1>
        <Form onSubmit={handleAddFilm}>
          <Button id="addFilm" type="submit">
            Add Movie
          </Button>
        </Form>
        <div id="collection">
          {library.map(movie => (
            <Thumbnail key={movie.key} title={movie.title} director={movie.director} summary={movie.summary} />
          ))}
        </div>
        <Form onSubmit={handleLogoutSubmit}>
          <Button id="signOut" type="submit">
            Sign Out
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Home

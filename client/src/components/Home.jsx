import { useContext, useState } from "react"
import DispatchContext from "../DispatchContext"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import Thumbnail from "./Thumbnail"

// Mock data for film library

const drama = { title: "Dramatic Movie", director: "dir. Jill Smith", summary: "A heartwarming tale of the courage and humanity that defines us all. Rated NC-17." }
const comedy = { title: "Comedy Movie", director: "dir. John Doe", summary: "Unlikely friends go on an arbitrary road trip with hilarious consequences. Not Rated." }
const horror = { title: "Horror Movie", director: "dir. Jim Raven", summary: "A tale of the macabre so odious it's been banned in North Korea and Saudi Arabia. Rated G." }

const library = [drama, comedy, horror]

function Home() {
  const appDispatch = useContext(DispatchContext)
  // const [films, setFilms] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    appDispatch({ type: "logout" })
  }

  function libraryLoop() {
    {
      for (let i = 0; i < library.length; i++) {
        return <Thumbnail title={library[i].title} director={library[i].director} summary={library[i].summary} />
      }
    }
  }

  return (
    <div id="profileContainer">
      <div id="profile">
        <h1 id="proName">John Smith</h1>
        <div id="collection">{libraryLoop()}</div>

        <Button id="signOut" type="submit" onSubmit={handleSubmit}>
          Sign Out
        </Button>
      </div>
    </div>
  )
}

export default Home

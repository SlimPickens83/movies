import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useImmerReducer } from "use-immer"

// Context
import StateContext from "./StateContext.jsx"
import DispatchContext from "./DispatchContext.jsx"

// Components
import HomeGuest from "./components/HomeGuest"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"

// Bootstrap
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

function App() {
  const initialState = {
    loggedIn: false
  }

  function mainReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        return
      case "logout":
        draft.loggedIn = false
        return
      case "addFilm":
        alert("Add film feature coming soon.")
        return
    }
  }

  const [state, dispatch] = useImmerReducer(mainReducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <style type="text/css">{`
        .dropdown-menu, .dropdown-item {
          background-color: #100000;
          color: #f7f6f2;
        }
        .nav-link, .navbar-nav, .nav-link.show, .btn {
          color: #f7f6f2 !important;
          border-color: #f7f6f2 !important;
        }
        .btn-outline-success {
          --bs-btn-color: #e000000 !important;
          --bs-btn-border-color: #e000000 !important;
          --bs-btn-hover-bg: #e000000 !important;
          --bs-btn-hover-border-color: #e000000 !important;
          --bs-btn-active-bg: #e000000 !important;
          --bs-btn-active-border-color: #e000000 !important;
        }
      `}</style>
          <Navbar id="navbar" expand="lg">
            <Container fluid>
              <Navbar.Brand id="brandLink" style={{ color: "#f7f6f2" }} href="#">
                Movie Library Plus
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={state.loggedIn ? <Home /> : <HomeGuest />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App

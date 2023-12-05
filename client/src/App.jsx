import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomeGuest from "./components/HomeGuest"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeGuest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

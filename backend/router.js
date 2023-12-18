const express = require("express")
const router = express.Router()
const cors = require("cors")

const corsOptions = {
  origin: process.env.FRONTENDURL,
  optionsSuccessStatus: 200
}

router.use(cors(corsOptions))

router.get("/", (req, res) => res.json("Backend running successfully."))

module.exports = router

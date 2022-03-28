const express = require("express")
const router = express.Router()

const Main_get = require("./Main/Main.get")

router.get("/", Main_get)

module.exports = router
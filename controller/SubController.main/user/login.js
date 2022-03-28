const express = require('express')
const router = express.Router()

const login_get = require("./login/login.get")

const login_post = require("./login/login.post")

router.get("/", login_get)
router.post("/", login_post)

module.exports = router
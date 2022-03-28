const express = require('express')
const router = express.Router()

const register_get = require("./register/register.get")
const register_post = require("./register/register.post")

router.get("/", register_get)
router.post("/", register_post)

module.exports = router
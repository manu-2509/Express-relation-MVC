const express = require('express');

const crudController= require("./crud.controller")

const User = require("../models/user.models")


const router = express.Router()

router.post("",crudController.User(User))

router.get("",crudController.getAll(User))



module.exports = router
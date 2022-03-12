const express = require('express');
const crudController= require("./crud.controller")

const Evaluation = require("../models/evaluation.models")

const router = express.Router()


router.post("",crudController.User(Evaluation))




module.exports = router
const express = require('express');
const crudController= require("./crud.controller")

const Batch = require("../models/batch.models")

const router = express.Router()


router.post("",crudController.User(Batch))




module.exports = router
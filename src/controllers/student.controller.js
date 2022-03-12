const express = require('express');
const crudController= require("./crud.controller")

const Student = require("../models/student.models")


const router = express.Router()


router.post("",crudController.User(Student))

router.get("",crudController.getAll(Student))


module.exports = router
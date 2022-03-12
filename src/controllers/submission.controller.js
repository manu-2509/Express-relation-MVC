const express = require('express');
const crudController= require("./crud.controller")

const Submission = require("../models/submission.models")


const router = express.Router()


router.post("",crudController.User(Submission))

router.get("",crudController.getAll(Submission))

router.get("/:evaluationId",async(req, res) => {
    try {
        const students = await Submission.find({evaluationId: req.params.evaluationId})
        .populate({path:"StudentId",populate:{path:"userId",select:["firstName","lastName"]},select:["rollId","currentBatch"]})
        .lean()
        .exec()
        return res.status(200).send({ students:students})
    } catch (err) {
        return res.status(500).send({err:err.message})
    }

})

router.get("/topscorer/:evaluationId",async(req, res) => {
    try {
        const students = await Submission.find({evaluationId: req.params.evaluationId})
        .populate(
            {path:"StudentId",
            populate:{path:"userId",select:["firstName","lastName","gender","dateOfBirth","type"]},
            select:["rollId","currentBatch"]})
        .sort({marks:-1})
        .limit(1)
        .lean()
        .exec()
        return res.status(200).send({ students:students})
    } catch (err) {
        return res.status(500).send({err:err.message})
    }

})

// .populate:{path:"userId",select:["firstName","lastName"]})
module.exports = router
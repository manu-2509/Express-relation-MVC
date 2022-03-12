const express = require('express');

const userController= require("./controllers/user.controller")


const studentController= require("./controllers/student.controller")

const batchController= require("./controllers/batch.controller")
 
const evaluationController= require("./controllers/evaluation.controller")

const submissionController= require("./controllers/submission.controller")


const app = express();


app.use(express.json());


app.use("/users",userController)
app.use("/students",studentController)
app.use("/batch",batchController)
app.use("/eval",evaluationController)
app.use("/submission",submissionController)




module.exports=app;
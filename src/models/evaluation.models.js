const mongoose = require('mongoose');

const evaluationSchema = mongoose.Schema({
    dateOfEvaluation:{type:String,required:true},
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true
    },
    batchId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"batch",
        required: true
    }

})


const Evaluation = mongoose.model('evaluation', evaluationSchema);

module.exports = Evaluation
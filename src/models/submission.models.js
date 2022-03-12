const mongoose=require('mongoose')

const submissionSchema = mongoose.Schema({
    marks:{type:Number,required:true},
    evaluationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"evaluation",
        required: true
    },
    StudentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required: true
    }

},{
    timestamps:true
})

const Submission = mongoose.model('submission', submissionSchema);

module.exports = Submission
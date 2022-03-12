const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    rollId:{type: Number, required: true},
    currentBatch:{type: String, required: true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true
    },
    batchId:{
        
        type:mongoose.Schema.Types.ObjectId,
        ref:"batch",
        required: true
    }

},
{
    timestamps:true
})


const Student = mongoose.model('student', studentSchema);

module.exports = Student
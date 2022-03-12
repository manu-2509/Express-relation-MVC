User = (model) =>async(req,res)=>{
    try {
        const item = await model.create(req.body)
        return res.status(200).send({item:item}) ;
    } catch (err) {
        return res.status(500).send({err:err.message});
    }
}


getAll = (model)=>async(re,res)=>{
    try{
        const item = await model.find({}).lean().exec();
        return res.status(200).send({item:item})
    }catch(err){
        return res.status(500).send({err:err.message});
    }
}

module.exports={
    User:User,
    getAll:getAll
}
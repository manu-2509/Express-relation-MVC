const app = require("./index")

const connect = require("./configs/db")


app.listen(2500,async()=>{
try {
  await connect();
    
} catch (err) {
    console.log('err: ', err);
    
}
console.log('listening on port 2500')
})
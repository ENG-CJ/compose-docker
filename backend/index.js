const express = require("express")
const cores = require("cors")
const app = express();


app.use(cores());

app.use(express.json());    

app.get('/api/', (req,res)=>{
    return res.send({message : "Hello From Backend service ✅"})
})

app.listen(3400,'0.0.0.0',()=>{console.log('listening 3400')}

)


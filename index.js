const express = require ("express");
const app = express();
app.get('/home',(req,res)=>{
    res.send("Hello World!");
})
app.listen(3001,()=>{
    console.log("Server runnning on port 3001 Nigga!!!");
})
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.path}`);
    next();
})
app.use(
    express.json())
app.get('/api/about',(req,res)=>{
    console.log(`${req.headers}`)
})
app.post((req,res)=>{
    const body = req.body;
    res.json({received:body});
})
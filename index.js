require('dotenv').config();

const express=require('express')
const app=express()
const port=process.env.PORT
app.get('/',(req,res)=> {
    res.send('Hello World!');
})
app.get('/instagram',(req,res)=>{
    res.send('This is instagram!')
})
app.listen(port,()=>{
    console.log(`App is listenining on port${port}`);
})
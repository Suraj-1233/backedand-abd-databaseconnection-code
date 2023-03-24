 const mongoose =require('mongoose');

const express =require('express');
const app= express();

 

const DB='mongodb+srv://thedsalover:NZE5SplHcOuzrdbu@cluster0.x4cdcbc.mongodb.net/database1?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser:true,
   
    UseUnifiedTopology:true,
    
}).then(()=>{
    console.log('databse connected');
}).catch((err)=>console.log('database not conneted',err));

app.get('/',(req,res)=>{
    res.send(' this is server');

});
app.listen(3000,()=>{
    console.log(" server on running on 3000");
})
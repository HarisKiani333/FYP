import express from 'express';
import data from './data.js'
import  mongoose  from 'mongoose';''
import userRouter from './Routers/userRouter.js';
import dotenv from 'dotenv';
dotenv.config();
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGODB_URL ||'mongodb://localhost/Judicial_Diary',{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true,

})
app.get('/api/profile/:id',(req,res) =>{
const profile=data.profile.find((x)=> x._id === req.params.id);
if(profile){
    res.send(profile);
    
}else{
res.status(404).send({message:'No Such Profile Exists'});

}


});

app.get('/api/profile',(req,res) =>{
    res.send(data.profile);});
app.get('/api/users',userRouter);
app.get('/',(req,res)=>{res.send("Server Is Ready");});

app.use((err,req,res,next)=>{

res.status(500).send({message:err.message});
});


//const port= process.env.PORT || 5000;
const port=process.env.PORT || 5000;

app.listen(port,()=>{
console.log(`Server is http://localhost:${port}`);
});
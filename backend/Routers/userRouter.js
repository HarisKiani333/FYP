import express from 'express';
import expressAsyncHander from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utilityfunc.js';


const userRouter=express.Router();
userRouter.get('./seed', expressAsyncHander( async(req,res)=>{
//await User.remove({});
    const createdUsers=await User.insertMany(data.users);
res.send({createdUsers});
})

);

userRouter.post('/signin',expressAsyncHander(async(res,req)=>{

const user=await User.findOne({email:req.body.email});
if(user){
if(bcrypt.compareSync(req.body.password,user.password)){
res.send({
_id:user.id,
name:user.name,
email:user.email,
isAdmin:user.isAdmin,
token:generateToken(user),


});
return 
}

}

res.status(401).send({message:'Invalid email or Password Entered'})

}));

export default userRouter;
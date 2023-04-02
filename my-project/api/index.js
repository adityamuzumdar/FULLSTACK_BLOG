const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose')
const User= require('./models/User')
// const bcrypt = require('bcryptjs');
const app=express();


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://aditya:ZL4EMavAKHPLMSKE@cluster0.bsllvlp.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req,res) => {
    const {username,password} = req.body;
    try{
      const userDoc = await User.create({
        username,password
        // password:bcrypt.hashSync(password,salt),
      });
      res.json(userDoc);
    } catch(e) {
      res.status(400).json(e);
    }
  });
  
  
app.listen(4000);
//mongodb+srv://aditya:ZL4EMavAKHPLMSKE@cluster0.bsllvlp.mongodb.net/?retryWrites=true&w=majority
//ZL4EMavAKHPLMSKE
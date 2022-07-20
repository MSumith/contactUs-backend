const express=require('express');
require('dotenv').config()

const mongoose=require('mongoose')






const app=express();

const bodyParser=require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://sumith:Sumith%40890@cluster0.utvxm.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true},{useUnifiedTopology:true})

const contactSchema={
    
    email:String,
    name:String,
    issue:String
}

const Contact=mongoose.model("Contact",contactSchema)

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/contact.html");

})

app.post("/contact",(req,res)=>{
    let newContact=new Contact({
        email:req.body.email,
        name:req.body.name,
        issue:req.body.issue
    });
    newContact.save();
    res.redirect('/contact');

})

    app.listen(process.env.PORT,()=>{
        console.log('listening on port',process.env.PORT)
    })

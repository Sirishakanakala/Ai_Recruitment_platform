const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Profile_Management")

app.get('/profile', (req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/profile/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/profile/update/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id : id}, {
        company_name: req.body.company_name,
        contact_details: req.body.contact_details,
        industry: req.body.industry,
        job_role: req.body.job_role,
        company_description: req.body.company_description,
        job_openings: req.body.job_openings
    }) 
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.delete('/profile/delete/:id' , (req,res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(deletedUser => res.json(deletedUser))
    .catch(err => res.json(err))
})
app.post("/profile/create", (req,res) => {
     UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.listen(3001, () =>{
    console.log("server is running on portal")
})
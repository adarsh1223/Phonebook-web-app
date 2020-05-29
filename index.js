const express = require('express')
const mongoose = require('mongoose')
//Initialize express app
const app = express();
//Initialize the sever
app.listen(3000, () => {
    console.log('sever listening on port:3000');
});

// Connecting to DB
mongoose.connect('mongodb://localhost:27017/PhoneBook', {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('connected to db')
}).catch((error) => {
 console.log(error)
})


const Phone = require('./model/models')

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))


// Adding a User to PhoneBook
app.post('/', (req, res) => {
 name = req.body.name,
 dob = req.body.dob,
 phone = req.body.phone,
 email = req.body.email
let newPhone = new Phone({
  name: name,
  dob: dob,
  phone: phone,
  email: email
 })
newPhone.save().then((Phone) => {
  res.send(Phone)
 }).catch((err) => {
  console.log(error)
 })
})


// Reading a Uder from PhoneBook
app.get('/:id', (req, res) =>{
 Phone.findById(req.params.id, (err, user) =>{
  res.send(user)
 })
})

// Updating the User
app.post('/update/:id', (req, res) => {
 let Phone = {}
 if (req.body.name) Phone.name = req.body.name
 if (req.body.dob) Phone.email = req.body.dob
 if (req.body.phone) Phone.phone = req.body.phone
 if (req.body.email) Phone.place = req.body.email
Phone = { $set: Phone }
Phone.update({_id: req.params.id}, Phone).then(() => {
  res.send(Phone)
 }).catch((err) => {
  console.log(error)
 })
})

// Deleting the User from PhoneBook
app.delete('/delete/:id', (req, res) => {
 Phone.remove({_id: req.params.id},Phone).then(() => {
  res.send('user deleted')
 }).catch((err) => {
  console.log(error)
 })
})
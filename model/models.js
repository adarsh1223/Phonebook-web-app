const mongoose = require('mongoose');

// Schema for AddressBook
const phoneSchema = mongoose.Schema({
 name: {
  type: String,
  required: true
 },
 dob: {
  type: Date,
  required: true
 },
 phone: {
  type: Number,
  required: true
 },
 email: {
  type: String,
  required: true
 }
})
//Creating the collection Address
const Phone = mongoose.model('Phone', phoneSchema)

module.exports = Phone;

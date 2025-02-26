const mongoose = require("mongoose")
const schema = mongoose.Schema


const appointmentSchema = new schema({
  title: String,
  date: String,
  id: String,
  number: Number,
  type: String,
  backgroundColor: String,
  borderColor: String
});

module.exports = mongoose.model('Appointments', appointmentSchema)
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const patientSchema = new schema({
    fullname: String,
    ID : String,
    number: String,
    description: String,
    history: Array,
})

module.exports = mongoose.model("Patient", patientSchema)
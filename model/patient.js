const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
  patient_name: {
    type: String,
    require: false,
  },
  patient_age: {
    type: Number,
    require: false,
  },
  patient_email: {
    type: String,
    require: false,
  },
  patient_blood: {
    type: String,
    require: false,
  },
  patient_address: {
    type: String,
    require: false,
  },
  patient_password: {
    type: Number,
    require: false,
  },
});
module.exports = mongoose.model("patientdata", patientSchema);

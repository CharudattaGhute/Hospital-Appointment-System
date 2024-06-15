const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
  doctor_name: {
    type: String,
    require: false,
  },
  doctor_phone: {
    type: Number,
    require: false,
  },
  doctor_specialist: {
    type: String,
    require: false,
  },
  doctor_email: {
    type: String,
    require: false,
  },
  doctor_password: {
    type: String,
    require: false,
  },
  doctor_address: {
    type: String,
    require: false,
  },
});
module.exports = mongoose.model("doctordata", doctorSchema);

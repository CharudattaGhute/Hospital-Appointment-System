const mongoose = require("mongoose");
const Model = require("../model/patient");

async function addpatient(req, res) {
  console.log(req.body);
  try {
    const newpatient = new Model(req.body);
    await newpatient.save();
    res.status(201).send(newpatient);
  } catch (err) {
    res.status(500).send(err);
  }
}
// http://localhost:3000/api/addpatient

async function getAllpatient(req, res) {
  try {
    const newPatient = await Model.find();
    return res.send(newPatient);
    return res.status(200).send(newPatient);
  } catch (err) {
    return res.status(500).send(err);
  }
}
// http://localhost:3000/api/getAllpatient

async function loginpatient(req, res) {
  console.log(req.body);
  try {
    const newPatient = await Model.findOne({
      patient_email: req.body.patient_email,
      patient_password: req.body.patient_password,
    });
    if (!newPatient) {
      res.status(201).send({ message: "Patient not found", success: false });
    }
    const isMatch = await Model.findOne({
      patient_password: req.body.patient_password,
    });
    if (!isMatch) {
      res
        .status(201)
        .send({ message: "Password is incorrect", success: false });
    } else {
      result = {
        message: "Patient Login Success",
        success: true,
        id: newPatient._id,
        patient_name: newPatient.patient_name,
      };
      console.log(result);
      res.status(200).send(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}
module.exports = {
  addpatient,
  getAllpatient,
  loginpatient,
};

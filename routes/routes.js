const express = require("express");
const Model = require("../model/patient");
const docModel = require("../model/doctor");

const router = express.Router();

// Patiend Data
router.post("/addpatient", async (req, res) => {
  console.log(req.body);
  try {
    const data = await new Model({
      patient_name: req.body.patient_name,
      patient_age: req.body.patient_age,
      patient_email: req.body.patient_email,
      patient_blood: req.body.patient_blood,
      patient_address: req.body.patient_address,
      patient_password: req.body.patient_password,
    });
    const dataToSave = await data.save();
    res.status(200).json(dataTosave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getAllpatient", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login and registration page
router.post("/loginpatient", async (req, res) => {
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
        patient_name: newPatient.patient_name,
      };
      console.log(result);
      res.status(200).send(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

/* Doctor Data */
router.post("/adddoc", async (req, res) => {
  console.log(req.body);
  try {
    const docdata = await new docModel({
      doctor_name: req.body.doctor_name,
      doctor_phone: req.body.doctor_phone,
      doctor_specialis: req.body.doctor_specialis,
      doctor_email: req.body.doctor_email,
      doctor_password: req.body.doctor_password,
      doctor_address: req.body.doctor_address,
    });
    const dataToSave = await docdata.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/getalldoc", async (req, res) => {
  try {
    const docdata = await docModel.find();
    res.json(docdata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;

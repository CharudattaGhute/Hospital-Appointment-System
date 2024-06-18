const mongoose = require("mongoose");
const docModel = require("../model/doctor");
async function adddoc(req, res) {
  try {
    const newDoctor = new docModel(req.body);
    await newDoctor.save();
    res.status(201).send(newDoctor);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getalldoc(req, res) {
  try {
    const newDoctor = await docModel.find();
    return res.send(newDoctor);
    return res.status(200).send(newDoctor);
  } catch (err) {
    return res.status(500).send(err);
  }
}

async function logindoctor(req, res) {
  console.log(req.body);
  try {
    const newDoctor = await docModel.findOne({
      doctor_email: req.body.doctor_email,
      doctor_password: req.body.doctor_password,
    });
    if (!newDoctor) {
      return res
        .status(201)
        .send({ message: "Doctor not found", success: false });
    }
    const isMatch = await docModel.findOne({
      doctor_password: req.body.doctor_password,
    });
    if (!isMatch) {
      return res
        .status(201)
        .send({ message: "Password is incorrect", success: false });
    } else {
      result = {
        message: "Login Success",
        success: true,
        id: newDoctor._id,
        doctor_name: newDoctor.doctor_name,
      };
      console.log(result);
      return res.status(200).send(result);
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports = {
  adddoc,
  getalldoc,
  logindoctor,
};

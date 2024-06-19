const mongoose = require("mongoose");
const appointmentModule = require("../model/appointment");

async function addappointment(req, res) {
  try {
    const newappointment = await appointmentModule(req.body);
    await newappointment.save();
    res
      .status(200)
      .send({ message: "Appointment created sucessfully", newappointment });
  } catch (error) {
    res.status(400).send(error);
  }
}
async function getappointment(req, res) {
  try {
    const newappointment = await appointmentModule.find({}, { __v: 0 });
    // return res.send(newappointment);
    res.status(200).send(newappointment);
  } catch (error) {
    res.status(500).send(error);
  }
}
async function getappointmentbypatientid(req, res) {
  console.log(req.query);
  pid = req.query.patientId;
  try {
    const newappointment = await appointmentModule.find({ patientId: pid });
    // res.send(newappointment);
    res.status(200).send(newappointment);
  } catch (error) {
    res.status(500).send(error);
  }
}
async function getappointmentbydoctortid(req, res) {
  console.log(req.query);
  did = req.query.doctorId;
  try {
    const newappointment = await appointmentModule.find({ doctorId: did });
    // res.send(newappointment);
    res.status(200).send(newappointment);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  addappointment,
  getappointment,
  getappointmentbypatientid,
  getappointmentbydoctortid,
};

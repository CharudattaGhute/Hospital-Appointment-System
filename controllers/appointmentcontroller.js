const mongoose = require("mongoose");
const appointmentModule = require("../model/appointment");

async function addappointment(req, res) {
  try {
    const newappointment = new appointmentModule(req.body);
    await newappointment.save();
    res.status(200).send(newappointment);
  } catch (error) {
    res.status(400).send(error);
  }
}
async function getappointment(req, res) {
  try {
    const newappointment = new appointmentModule.find();
    return res.send(newappointment);
    return res.status(200).send(newappointment);
  } catch (error) {
    return res.status(500).send(error);
  }
}
async function getappointmentbypatientid(req, res) {
  try {
    const newappointment = await appointmentModule.find({
      patientId: req.params.patientId,
    });
    return res.send(newappointment);
    return res.status(200).send(newappointment);
  } catch (error) {
    return res.status(500).send(error);
  }
}
module.exports = {
  addappointment,
  getappointment,
  getappointmentbypatientid,
};

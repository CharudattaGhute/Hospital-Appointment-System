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

    res.status(200).send(newappointment);
  } catch (error) {
    res.status(500).send(error);
  }
}
async function deleteappointmentBypatient(req, res) {
  try {
    const appointmentid = req.params.id;
    const deleteappointment = await appointmentModule.findByIdAndDelete(
      appointmentid
    );
    if (!deleteappointment) {
      res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).json({ message: "Appointment deleted" });
  } catch (err) {
    console.error("Error deleting appointment", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
}
// http://localhost:3000/api//deleteappointmentBypatient/66727d90bc680405694170aa
async function updateAppointmentBydoctor(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Pending", "Accepted", "Rejected"].includes(status)) {
      res.status(400).json({ message: "Invalid status" });
    }
    const updateAppointment = await appointmentModule.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updateAppointment) {
      res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).send(updateAppointment);
  } catch (err) {
    console.error("Error while updating appointment:", err);
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ message: "Validation error", error: err.message });
    } else if (err instanceof mongoose.Error.CastError) {
      res
        .status(400)
        .json({ message: "Invalid appointment id", error: err.message });
    } else {
      res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  }
}

module.exports = {
  addappointment,
  getappointment,
  getappointmentbypatientid,
  getappointmentbydoctortid,
  deleteappointmentBypatient,
  updateAppointmentBydoctor,
};

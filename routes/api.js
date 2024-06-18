const express = require("express");
const router = express.Router();

const patientModel = require("../controllers/patientcontroller");
const doctorModel = require("../controllers/doctorcontroller");
const appointModule = require("../controllers/appointmentcontroller");

router.post("/addpatient", patientModel.addpatient);
router.get("/getAllpatient", patientModel.getAllpatient);
router.post("/loginpatient", patientModel.loginpatient);

router.post("/adddoc", doctorModel.adddoc);
router.get("/getalldoc", doctorModel.getalldoc);
router.post("/logindoctor", doctorModel.logindoctor);

router.post("/addappointment", appointModule.addappointment);
router.get("/getappointment", appointModule.getappointment);
router.get(
  "/getappointmentbypatientid/:patientId",
  appointModule.getappointmentbypatientid
);

module.exports = router;

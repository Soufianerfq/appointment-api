const express = require('express');
const router = express.Router();
const appointmentsController = require("../../controllers/appointmentsController")

router
  .get("/", appointmentsController.getAppointments)
  .post("/", appointmentsController.newAppointment)
  .put("/:id",appointmentsController.rescheduleAppointment)
  .delete("/:id",appointmentsController.deleteAppointment);

module.exports = router
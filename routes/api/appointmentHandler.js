const express = require('express');
const router = express.Router();
const appointmentsController = require("../../controllers/appointmentsController")
const verifyRole = require("../../middleware/veirfyRoles");
const ROLES_LIST = require("../../config/roles_list");

router
  .route("/")
  .get(
    verifyRole(ROLES_LIST.Admin, ROLES_LIST.Editor),
    appointmentsController.getAppointments
  )
  .post(
    verifyRole(ROLES_LIST.Admin, ROLES_LIST.Editor),
    appointmentsController.newAppointment
  )
  .put(
    verifyRole(ROLES_LIST.Admin, ROLES_LIST.Editor),
    appointmentsController.rescheduleAppointment
  )
  .delete(
    verifyRole(ROLES_LIST.Admin, ROLES_LIST.Editor),
    appointmentsController.deleteAppointment
  );

module.exports = router
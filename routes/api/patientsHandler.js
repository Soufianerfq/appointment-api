const express = require("express")
const router = express.Router();
const patientsController = require("../../controllers/patientsController");
const verifyRoles = require("../../middleware/veirfyRoles");
const ROLES_LIST = require("../../config/roles_list");


router
  .get("/", verifyRoles(ROLES_LIST.Admin), patientsController.getPatients)
  .post("/", verifyRoles(ROLES_LIST.Admin), patientsController.newPatient)
  .put("/:id", verifyRoles(ROLES_LIST.Admin), patientsController.editHistory)
  .delete("/:id", verifyRoles(ROLES_LIST.Admin), patientsController.deletePatient);


  module.exports = router
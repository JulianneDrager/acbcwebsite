const express = require("express");
const router = express.Router();
const RegisterController = require("../controllers/RegisterController");
const RegisterIndController = require("../controllers/RegisterIndController");

// Routes for Registers
router.get("/get", RegisterController.getAllRegisters);
router.get("/get/:id", RegisterController.getRegisterById);
router.post("/create", RegisterController.createRegister);
router.put("/update/:id", RegisterController.updateRegister);

router.delete("/delete/:id", RegisterController.deleteRegister);

router.get("/get-ind", RegisterIndController.getAllRegisters);
router.get("/get-ind/:id", RegisterIndController.getRegisterById);
router.post("/create-ind", RegisterIndController.createRegister);
router.put("/update-ind/:id", RegisterIndController.updateRegister);

router.delete("/delete-ind/:id", RegisterIndController.deleteRegister);

module.exports = router;

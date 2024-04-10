const express = require("express");
const router = express.Router();
const RegisterController = require("../controllers/RegisterController");

// Routes for Registers
router.get("/get", RegisterController.getAllRegisters);
router.get("/get/:id", RegisterController.getRegisterById);
router.post("/create", RegisterController.createRegister);
router.put("/update/:id", RegisterController.updateRegister);

router.delete("/delete/:id", RegisterController.deleteRegister);

module.exports = router;

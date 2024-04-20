const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// Routes for Registers
// router.get("/get", RegisterController.getAllRegisters);
// router.get("/get/:id", RegisterController.getRegisterById);
router.post("/create-user", UserController.createUser);
// router.put("/update/:id", RegisterController.updateRegister);
// router.delete("/delete/:id", RegisterController.deleteRegister);

module.exports = router;

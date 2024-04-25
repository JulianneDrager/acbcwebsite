const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/AuthUserController");

// Routes for Registers
// router.get("/get", RegisterController.getAllRegisters);
// router.get("/get/:id", RegisterController.getRegisterById);
router.post("/create-user", UserController.createUser);
router.post("/login", AuthController.authUser);
// router.put("/update/:id", RegisterController.updateRegister);
// router.delete("/delete/:id", RegisterController.deleteRegister);

module.exports = router;

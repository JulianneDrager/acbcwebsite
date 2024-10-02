const express = require("express");
const router = express.Router();
const extractEmailsController = require("../controllers/ExtractEmailsController");

// Routes for Registers
router.get("/extract-emails", extractEmailsController.extractEmails);

module.exports = router;

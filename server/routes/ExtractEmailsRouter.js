const express = require("express");
const router = express.Router();
const extractEmailsController = require("../controllers/ExtractEmailsController");
const extractEmailsIndController = require("../controllers/ExtractEmailsIndController");

// Routes for Registers
router.get("/extract-emails", extractEmailsController.extractEmails);
router.get("/extract-ind-emails", extractEmailsIndController.extractIndEmails);

module.exports = router;

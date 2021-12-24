const express = require("express");
const router = require("express").Router();

router.use(require("./notesRoutes"));

module.exports = router;
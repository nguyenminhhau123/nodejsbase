var express = require("express");
var router = express.Router();
let HomeController = require("../controller/HomeController");
/* GET home page. */
router.get("/", HomeController.getCVPage);

module.exports = router;

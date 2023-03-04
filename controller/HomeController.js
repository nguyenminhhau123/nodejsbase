const userDB = require("../model/user");
const cvDB = require("../model/cv");

const getHomePage = (req, res) => {
  userDB.find({}).then((data) => {
    res.render("index", { data });
  });
};
const getCVPage = (req, res) => {
  cvDB.find({}).then((data) => {
    res.render("cv", { data: data });
  });
};
const getUserPage = (req, res) => {
  res.send("respond with a resource");
};
module.exports = { getHomePage, getCVPage, getUserPage };

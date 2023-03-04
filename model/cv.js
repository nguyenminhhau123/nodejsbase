const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  image: String,
  name: String,
  phone: String,
  email: String,
  label: String,
});
const db = mongoose.model("usercvs", BlogPost);
module.exports = db;

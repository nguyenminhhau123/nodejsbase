const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  username: String,
  password: String,
});
const db = mongoose.model("users", BlogPost);
module.exports = db;

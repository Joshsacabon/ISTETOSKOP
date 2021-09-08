const mongoose = require("mongoose");

const Sched = mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  time: {
    type: String,
  },
  date:{
    type:String
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Sched", Sched);

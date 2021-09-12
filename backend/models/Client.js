const mongoose = require("mongoose");

const Client = mongoose.Schema({
  firstname: {
    type: String,
  },
  middlename: {
    type: String,
  },
  lastname: {
    type: String,
  },
  birthday:{
    type:String
  },
  age: {
    type: String,
  },
  emailadd:{
    type: String,
  },
  cellnumber: {
    type: String,
  },
  gender: {
    type: String,
  },
  saddress: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  country: {
    type: String,
  },
});

module.exports = mongoose.model("Client", Client);

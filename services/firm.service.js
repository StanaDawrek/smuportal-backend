const bcrypt = require("bcryptjs");
const authBasic = require("../helpers/authBasic");
const Firm = require("../models/Firm");

require("dotenv").config();

function firmService() {
  async function getFirms() {
    return Firm.find({});
  }

  async function deleteFirm(universityID) {
    return Firm.deleteOne({universityID: universityID})
  }

  return {
    getFirms,
    deleteFirm,
  };
}

module.exports = firmService;

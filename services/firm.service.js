const bcrypt = require("bcryptjs");
const authBasic = require("../helpers/authBasic");
const Firm = require("../models/Firm");

require("dotenv").config();

function firmService() {
  async function getFirms() {
    return Firm.find({});
  }

  async function deleteFirm(registration) {
    return Firm.deleteOne({registration: registration})
  }
  async function addFirm(Name,Sector,Industry,PublicPrivate,Address,Registration,Email) {
    return Firm.create({Name: Name, Sector: Sector,Industry:Industry, PublicPrivate: PublicPrivate, Address: Address,Registration: Registration,Email: Email})
  }
  async function getfirmsBySector(PublicPrivate) {
    return Firm.find({PublicPrivate: PublicPrivate})
   }

  return {
    getFirms,
    addFirm,
    deleteFirm,
    getfirmsBySector
  };
}

module.exports = firmService;

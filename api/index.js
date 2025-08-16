// Vercel API handler
const { getInterface } = require("../index.js");

module.exports = (req, res) => {
  getInterface()(req, res);
};
const PackageController = require("../controllers/packageController");
var cors = require("cors");
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

module.exports = (app) => {
  app.get("/package", cors(corsOptions), PackageController.get);
};

const PackageController = require("../controllers/packageController");

module.exports = (app) => {
  app.get("/package", PackageController.get);
};

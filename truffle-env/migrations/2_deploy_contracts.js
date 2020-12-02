var LoyaltyPoints = artifacts.require("./LoyaltyPoints.sol");

module.exports = function(deployer) {
  deployer.deploy(LoyaltyPoints);
};
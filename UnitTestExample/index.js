console.log("unit testing");
var myValidator = require("./modules/password_validator");
var password = "testBauBau2017";
var valid = myValidator.validPassword(password);
console.log("your pass: " + password + " is : " + valid);
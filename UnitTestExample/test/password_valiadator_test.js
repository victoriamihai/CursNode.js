var chai = require("chai");
var passwordValidator = require("../modules/password_validator.js")

describe("passwordValidator", function() {//se refera la module
   describe(".validPassword(password)", function() {//se refera la functie
       it("trebuie sa aibe cel putin 8 caractere", function(){
           //Test Goes Here
           var wrongPass = "1234567";
           var valid = passwordValidator.validPassword(wrongPass);
           //chai check
           chai.expect(valid).to.be.equal(false);
           //test with goot pass
           var goodPass = "12345678";
           var valid2 = passwordValidator.validPassword(goodPass);
           chai.expect(valid2).to.be.equal(true);
       });
   });
});
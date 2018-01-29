describe("bank", function(){



  describe("currentBalance", function(){
    var bank;
    beforeEach(function() {
      bank = new Bank();
    })

    it("should return the current balance of the account when requested", function(){
      expect(bank.showBalance()).toEqual("Your current balance is £50.00");
    })
  })

  describe("deposit and withdraw", function() {
    var bank;
    beforeEach(function() {
      bank = new Bank();
    })

    it("should be able to deposit money", function(){
      bank.deposit(50);
      expect(bank.balance).toEqual(100);
    })
    it("should be able to withdraw money", function(){
      bank.withdraw(25);
      expect(bank.balance).toEqual(25);
    })
  })

});

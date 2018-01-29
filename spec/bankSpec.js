describe("bank", function(){



  describe("currentBalance", function(){
    var bank;
    beforeEach(function() {
      bank = new Bank();
    })

    it("should return the current balance of the account when requested", function(){
      expect(bank.showBalance()).toEqual(50);
    })
  })

});

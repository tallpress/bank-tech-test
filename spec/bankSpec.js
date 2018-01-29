describe("bank", function(){

  describe("currentBalance", function(){
    var bank;
    beforeEach(function() {
      bank = new Bank();
    });

    it("should return the current balance of the account when requested", function(){
      expect(bank.showBalance()).toEqual("Your current balance is £50.00");
    });
  });

  describe("deposit and withdraw", function() {
    var bank;

    beforeEach(function() {
      bank = new Bank();
    });

    it("should be able to deposit money", function(){
      bank.deposit(50);
      expect(bank.balance).toEqual(100);
    });

    it("should be able to withdraw money", function(){
      bank.withdraw(25);
      expect(bank.balance).toEqual(25);
    });

    it("should raise an error, if you withdraw beyond your balance", function(){
      expect(function(){ bank.withdraw(51); }).toThrowError("Insufficient funds");
    });

  });

  describe("transaction list", function(){
    var bank;

    beforeEach(function() {
      bank = new Bank();
    });

    it("should add a deposit transaction when depositing money", function() {
      bank.deposit(50);
      expect(bank.transactions[0].type).toEqual("Deposit");
    });

    it("should add a withdraw transaction when withdrawing money", function() {
      var newBank = new Bank();
      newBank.withdraw(25);
      expect(newBank.transactions[0].type).toEqual("Withdrawal");
    })
  });

});

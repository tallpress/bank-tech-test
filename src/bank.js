(function(exports){
  function Bank(){
    this.balance = 50;
    this.printer = new Printer();
  }

  Bank.prototype.showBalance = function() {
    return this.printer.printBalance(this.balance);
  }

  Bank.prototype.deposit = function(depositAmount) {
    this.balance += depositAmount;
  }

  Bank.prototype.withdraw = function(withdrawAmount) {
    if (this.balance - withdrawAmount < 0 ) {
      this.printer.insufficientFunds();
    } else {
      this.balance -= withdrawAmount;
    };
  };

  exports.Bank = Bank;
})(this);

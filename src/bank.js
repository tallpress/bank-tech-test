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
    this.balance -= withdrawAmount;
  }

  exports.Bank = Bank;
})(this);

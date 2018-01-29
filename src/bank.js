(function(exports){
  function Bank(){
    this.balance = 50;
    this.printer = new Printer();
    this.transactions = [];
  }

  Bank.prototype.showBalance = function() {
    return this.printer.printBalance(this.balance);
  }

  Bank.prototype.deposit = function(depositAmount) {
    var depositTrans = new Transaction('d', depositAmount);
    this.transactions.push(depositTrans);
    this.balance += depositAmount;
  }

  Bank.prototype.withdraw = function(withdrawAmount) {
    if (this.balance - withdrawAmount < 0 ) {
      this.printer.insufficientFunds();
    } else {
      var withdrawTrans = new Transaction('w', withdrawAmount);
      this.transactions.push(withdrawTrans);
      this.balance -= withdrawAmount;
    };
  };

  exports.Bank = Bank;
})(this);

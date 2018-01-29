(function(exports){
  function Bank(initialBalance){
    this.balance = initialBalance;
    this.printer = new Printer();
    this.transactions = [];
    this.initialBalance = initialBalance;
  }

  Bank.prototype.showBalance = function() {
    return this.printer.printBalance(this.balance);
  }

  Bank.prototype.deposit = function(depositAmount) {
    this.balance += depositAmount;
    var depositTrans = new Transaction('d', depositAmount, this.balance);
    this.transactions.push(depositTrans);
    // this.calcBalance();
  }

  Bank.prototype.withdraw = function(withdrawAmount) {
    if (this.balance - withdrawAmount < 0 ) {
      this.printer.insufficientFunds();
    } else {
      this.balance -= withdrawAmount;
      var withdrawTrans = new Transaction('w', withdrawAmount, this.balance);
      this.transactions.push(withdrawTrans);
      // this.calcBalance();
    };
  };

  Bank.prototype.showStatement = function(){;
    var toPrint = this.printer.printStatement(this.transactions)
    this.printer.toConsole(toPrint);
  }

  exports.Bank = Bank;

})(this);

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

  Bank.prototype.showStatement = function(){
    this.printer.toConsole(this.printer.printStatement(this.transactions));

  }


  // Bank.prototype.calcBalance = function() {
  //   for(var i = 0; i < this.transactions.length; i++) {
  //     var transaction = this.transactions[i];
  //     if (transaction.type == "Deposit") {
  //       this.balance += transaction.amount;
  //     } else if (transaction.type == "Withdrawal") {
  //       this.balance -= transaction.amount;
  //     }
  //   }
  //   return this.balance;
  // };

  exports.Bank = Bank;

})(this);

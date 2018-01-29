(function(exports){
  function Printer(){

  }

  //want to make private
  Printer.prototype.formatMoney = function(input) {
    return "£" + parseFloat(input).toFixed(2);
  }

  Printer.prototype.printBalance = function(amount){
    return "Your current balance is " + this.formatMoney(amount);
  }

  Printer.prototype.insufficientFunds = function() {
    throw new Error("Insufficient funds");
  }

  Printer.prototype.printStatement = function(transactions) {
    var toPrint = "Date || Transaction type || Amount || Balance after \n"
    for (var i = 0;  i < transactions.length; i++) {
      var currentTransaction = transactions[i];
      toPrint += `${currentTransaction.date} || ${currentTransaction.type} || ${this.formatMoney(currentTransaction.amount)} || ${this.formatMoney(currentTransaction.currentBalance)} \n`;
    }
    return toPrint;
  }

  Printer.prototype.toConsole = function(toPrint) {
    console.log(toPrint)
  };



  exports.Printer = Printer;
})(this);

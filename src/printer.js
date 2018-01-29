(function(exports){
  function Printer(){
  }

  function formatMoney(input) {
    return "£" + parseFloat(input).toFixed(2);
  };

  Printer.prototype.printBalance = function(amount){
    return "Your current balance is " + formatMoney(amount);
  }

  Printer.prototype.insufficientFunds = function() {
    throw new Error("Insufficient funds");
  }

  Printer.prototype.formatStatement = function(transactions) {
    var toPrint = "Date || Transaction type || Amount || Balance after \n"
    for (var i = 0;  i < transactions.length; i++) {
      var currentTransaction = transactions[i];
      toPrint += `${currentTransaction.date} || ${currentTransaction.type} || ${formatMoney(currentTransaction.amount)} || ${formatMoney(currentTransaction.currentBalance)} \n`;
    }
    return toPrint;
  }

  Printer.prototype.toConsole = function(toPrint) {
    console.log(toPrint);
  };

  exports.Printer = Printer;
})(this);

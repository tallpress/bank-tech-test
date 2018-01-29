(function(exports){
  function Printer(){

  }

  Printer.prototype.printBalance = function(amount){
    var formatedAmount = parseFloat(amount).toFixed(2)
    return "Your current balance is £" + formatedAmount;
  }

  Printer.prototype.insufficientFunds = function() {
    throw new Error("Insufficient funds");
  }

  exports.Printer = Printer;
})(this);

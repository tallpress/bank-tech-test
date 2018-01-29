(function(exports){
  function Bank(){
    this.balance = parseFloat(50).toFixed(2);
    this.printer = new Printer();
  }



  Bank.prototype.showBalance = function() {
    return this.printer.printBalance(this.balance);
  }

  exports.Bank = Bank;
})(this);

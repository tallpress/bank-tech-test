(function(exports){
  function Bank(){
    this.balance = 50;
  }

  Bank.prototype.showBalance = function() {
    return this.balance;
  }

  exports.Bank = Bank;
})(this);

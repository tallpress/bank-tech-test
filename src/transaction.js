(function(exports){
  function Transaction(type, amount, currentBalance) {
    this.type = whichType(type);
    this.amount = amount;
    this.date = getCurrentDate();
    this.currentBalance = currentBalance;
  }

  // want to make private
  function whichType(type) {
    if (type == "w") {
      return "Withdrawal";
    } else if (type == "d" ) {
      return "Deposit";
    };
  };

  // want to make private
  function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = 1 + today.getMonth();
    var yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`
  }

  exports.Transaction = Transaction;

})(this);

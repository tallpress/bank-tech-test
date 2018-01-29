(function(exports){
  function Transaction(type, amount, currentBalance, date = getCurrentDate()) {
    this.type = whichType(type);
    this.amount = amount;
    this.date = date;
    this.currentBalance = currentBalance;
  }

  function whichType(type) {
    if (type == "w") {
      return "Withdrawal";
    } else if (type == "d" ) {
      return "Deposit";
    };
  };

  function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = 1 + today.getMonth();
    var yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`
  }

  exports.Transaction = Transaction;

})(this);

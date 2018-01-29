(function(exports){
  function Transaction(type, amount) {
    this.type = whichType(type);
    this.amount = amount;
  }

  function whichType(type) {
    if (type == "w") {
      return "Withdrawal";
    } else if (type == "d" ) {
      return "Deposit";
    };
  };

  exports.Transaction = Transaction;

})(this);

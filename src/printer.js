(function(exports){
  function Printer(){

  }

  Printer.prototype.printBalance = function(amount){
    return "£" + amount;
  }
  exports.Printer = Printer;
})(this);

describe("printer", function(){
  it("should print the balance nicely", function(){
    printer = new Printer();
    expect(printer.printBalance(50)).toEqual("Your current balance is £50.00");
  });
  it("should return print statemtn", function(){
    printer = new Printer();

    var exampleData = [{
      date: "20/01/2018",
      type: "Deposit",
      amount: 50,
      currentBalance: 100
    }];
    
    expect(printer.printStatement(exampleData)).toEqual('Date || Transaction type || Amount || Balance after \n20/01/2018 || Deposit || £50.00 || £100.00 \n');
  });
});

describe("printer", function(){
  it("should print the balance nicely", function(){
    printer = new Printer();
    expect(printer.printBalance(50)).toEqual("Your current balance is £50.00");
  });
});

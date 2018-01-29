describe("transaction", function(){
  it("should be able to be a withdrawl or deposite", function(){
    withdrawal = new Transaction("w", 50);
    expect(withdrawal.type).toEqual("Withdrawal");
  })
  it("should be able to decifer which type a transaction is", function(){
    trans = new Transaction('d', 50);
    expect(trans.type).toEqual("Deposit");
  })
  it("Transaction should have a date", function(){
    var date = "02/10/1997"
    trans = new Transaction('d', 50, 600, date);
    expect(trans.date).toEqual("02/10/1997");
  })
  it("should also have the avaliable balance", function(){
    trans = new Transaction('d', 50, 200);
    expect(trans.currentBalance).toEqual(200);
  })
});

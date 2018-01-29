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
    trans = new Transaction('d', 50);
    
    expect(trans.date).toEqual("29/1/2018");
  })
});

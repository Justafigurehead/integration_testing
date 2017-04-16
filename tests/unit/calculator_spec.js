var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });
  it('should be able to multiply 3x5', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(15, calculator.runningTotal);
  });
  it('should be able to divide 21 by 7', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  });
  it('should be able to add 1 and 4', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal);
  });
  it('should be able to subtractor 7 and 4 to get 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  });
  it('should be able to concatenate clicks', function(){
    calculator.numberClick(7);
    calculator.numberClick(6);
    calculator.numberClick(5);
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(7654, calculator.runningTotal);
  });
  it('should be able concatenate multiple operations together', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(10, calculator.runningTotal);
  });
  it('should be able to clear calculator', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  });

});

(function() {
  //===================================================
  //1. Gather Requirements
  //     1. What problem are you trying to solve
  //2. Describe the app
  //     1. Plain conversational language to describe the app.
  //        Smallest set of stories that describe the app
  //     2. You may create a mockup
  // 3. Identify the main objects
  //     1. Use the stories and describe the main points
  // 4. Describe the interactions
  //     1. Describe what the features  do and how they interact
  // 5. Create a class diagram
  //     1. All of this is on paper and no code yet
  //===================================================

//===================================================
  //add entered numbers and operators into an tokens array
  //pop numbers off of the tokens array into a operands stack
  //pop operators off of  the tokens array and push onto a operator stack
  //pop numbers off operand stack and pass to calculator function (param1, param2)?
  //pop operator off operator stack and this will determine which calculator function to exe
  //calculate param1 + param2 / param1/param2 / param1 * param2 / param1- param2 based on operator
  //push results back on operand stack
  //clear will remove the last entry
  //clearStrict will remove everything in the operandStack and operatorStack
//===================================================


  var tokens = function(values) {
    //whatever the user clicks, collect values from user entry put in arr
    this.values = values
    this.arr = []
    this.length = 0 //add +1 to length with each entry
  }

  var calculator = function(values, operator) {
    this.values = values
    this.operator = operator
    this.operandStack = []
    this.operatorStack = []
  }

  // var operandStack = function(arr) {
  //   this.arr = [];
  //   this.length = 0
  // }

  // var operatorStack = function(arr) {
  //   this.arr = arr;
  //   this.length = 0
  // }

  calculator.prototype.add = function(value1, value2) {
    this.operandStack.shift()
    var num1 = this.operandStack.shift()
    var num2 = this.operandStack.shift()
    var operator = this.operatorStack.shift()
    result = value1 + value2;
    //push result to operand stack
  }

  calculator.prototype.subtract(value1, value2) {
    result = value1 - value2;
    //push result to operand stack
  }

  calculator.prototype.multiply(value1, value2) {
    result = value1 * value2
    //push result to operand stack
  }

  calculator.prototype.divide(value1, value2) {
    result = value1 / value2
    //push result to operand stack
  }

  calculator.prototype.percentage(value1, value2) {
    //maff stuff....
  }

  calculator.prototype.clear = function() {
    //pop off last user entry
  }

  calculator.prototype.clearStrict = function() {
    //pop off everything on operator and operand stack
  }



})()






// var calculator = new Calculator()
// calculator.compute(5, 4, '*')
// console.log(calculator.result()) // 20
// calculator.compute()
// console.log(calculator.result()) // 80

(function() {
  var TokenSorter = function() {
    this.tokens = [];
    this.operands = [];
    this.operators = [];
    this.operandStack = [];
    this.operatorStack = [];

  }

  //simulated press for browser debugging
  window.TokenSorter = TokenSorter;
  TokenSorter.prototype.operationSorter = function(value) {
    switch(value) {
      case "+":
      this.add(value1, value2, operators)
      break;

      case "-":

      break;

      case "*":

      break;

      case "/":

      break;
    }
  }

  // TokenSorter.prototype.sort = function() {
  //   var operator = this.operators.pop()
  //   var value1 = this.operands.pop()
  //   var value2 = this.operands.pop()
  //
  //   switch(operator) {
  //     case "+":
  //       this.operands.push(value1 + value2)
  //     break;
  //   }
  //   switch(operator) {
  //     case "-":
  //       this.operands.push(value1 - value2)
  //     break;
  //   }
  //   switch(operator) {
  //     case "*":
  //       this.operands.push(value1 * value2)
  //     break;
  //   }
  //   switch(operator) {
  //     case "÷":
  //       this.operands.push(value2/value1)
  //     break;
  //   }
  // }


  TokenSorter.prototype.displayValue = function() {
    return this.operands[this.operands.length-1]
  }

  TokenSorter.prototype.add = function(value1, value2) {
    this.operandStack.shift()
    var num1 = this.operands.shift()
    var num2 = this.operands.shift()
    var operator = this.operators.shift()
    result = value1 + value2;
    operandStack.push(result)
  }

  TokenSorter.prototype.subtract = function(value1, value2) {
    var num1 = this.operandStack.shift()
    var num2 = this.operandStack.shift()
  }

  TokenSorter.prototype.multiply = function(value1, value2) {
    var num1 = this.operandStack.shift()
    var num2 = this.operandStack.shift()
  }

  TokenSorter.prototype.divide = function(value1, value2) {
    var num1 = this.operandStack.shift()
    var num2 = this.operandStack.shift()
  }

  TokenSorter.prototype.percentage = function(value1, value2) {
    var num1 = this.operandStack.shift()
    var num2 = this.operandStack.shift()
  }

  TokenSorter.prototype.clearStrict = function() {
    this.operandStack = [];
    this.operatorStack = [];
  }

  var mathOperators = ['+', '*', '÷', '%'];
  var positive = '+'
  var negative = '-'
  var equals = '=';
  var sort = new TokenSorter()


  var onButtonClick = function(event) {
    var value = event.target.innerText
    sort.storeTokens(value)
    console.log('BUTTONS', value);
    // sort.tokens = [];
  }

  var allButtons = Array.from(document.querySelectorAll('button'))
  allButtons.forEach(function(button){
    button.addEventListener('click', onButtonClick)
  })

  TokenSorter.prototype.storeTokens = function(value) {
    if(mathOperators.includes(value)) {
      this.operands = this.tokens.slice()
      this.sortOperands(this.operands)
      this.sortOperators(value)
    }else{
      this.tokens.push(value)
    }
  }


  TokenSorter.prototype.sortOperands = function (arr) {
    if(this.operands.length > 1) {
      var value = this.operands.join('')
      console.log('Operands', this.operands);
      this.prepArrays(value)
    } else {
      console.log(this.operands, 'at sortOperators');
      this.prepArrays(this.operators)
    }
  };

  TokenSorter.prototype.sortOperators = function(value) {
    this.operators.push(value)
    console.log('OPERATORS PUSHED', this.operators);
    this.prepArrays(this.operators)
  }

  TokenSorter.prototype.prepArrays = function(nums) {

    var num = this.operands.shift()
    this.operandStack.push(num)
    this.operands = []
    console.log('operands', this.operands);

    this.operatorStack.push(this.operators)
    this.operatorStack = []
    this.operators = []
    console.log('operator', this.operator);

    this.tokens = [];
    console.log('TOKENS ARR', this.tokens);

    console.log('STACK operands', this.operandStack);
  }




})()

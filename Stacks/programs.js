//@1 Valid parenthesis  tc = O(n)
///Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//An input string is valid if:

//Open brackets must be closed by the same type of brackets.     ()
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.

//solution i'm going to push all starting char in a stack (,{,[.

let validParenthesis= function(s){
let stack =[]
for (let c of s){
    if(c==='(' || c==='{' || c==="["){
        stack.push(c);
    }
    else{
        if(
            (c===')' && stack[stack.length-1]!=='(') ||
            (c===')' && stack[stack.length-1]!=='(') ||
            (c===')' && stack[stack.length-1]!=='(') 
            
        ){
            return false
        }
        stack.pop();
    }
}
return !stack.length
}

console.log(validParenthesis('({[]})'));


//@2 Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

//Implement the MinStack class:

//MinStack() initializes the stack object.
//void push(int val) pushes the element val onto the stack.
//void pop() removes the element on the top of the stack.
//int top() gets the top element of the stack.
///int getMin() retrieves the minimum element in the stack.
//You must implement a solution with O(1) time complexity for each function.


//@2.1 in this tc =o(n) for min func

class myStack {
    constructor() {
      this.stack = [];
      this.length = 0;
    }
    push(val) {
      this.stack[this.length] = val;
      this.length++;
    }
  
    pop() {
      if (!this.length) return 'stack empty';
      delete this.stack[this.length - 1];
      this.length--;
    }
  
    top() {
      if (!this.length) return 'stack empty';
      return this.stack[this.length - 1];
    }
  
    min() {
      if (!this.length) return 'stack empty';
      let minVal = this.stack[this.length - 1];
      for (let i = this.length - 1; i >= 0; i--) {
        if (minVal > this.stack[i]) {
          minVal = this.stack[i];
        }
      }
      return minVal;
    }
  }
  
  const obj = new myStack();
  obj.push(-3);
  obj.push(20);
  obj.push(-1);
  obj.push(100);
  obj.push(0);
  obj.push(11);
  obj.pop();
  console.log(obj.min());

  //@2.2 tc=O(1) for min() func
  class yourStack {
    constructor(){
        this.stack =[];
        this.minStack =[];
        this.length=0;
    }
    push(val){
       this.stack[this.length]=val;
       if(this.length ===0){
        this.minStack[this.length] = val;
       }
       else{
        if(this.minStack[this.length-1]<val){
            this.minStack[this.length]= this.minStack[this.length-1];
        }
        else{
            this.minStack[this.length] = val;
        }
        
       }
       this.length ++;
    }

   pop(){
    if(!this.length) return 'stack is empty'
    delete this.stack[this.length-1];
    this.length --;
   }

   top(){
    if(!this.length) return 'stack is empty'
    return this.stack[this.length-1]
   }

   min(){
    if(!this.length) return 'stack is empty';
    return this.minStack[this.length-1]
   }
  }

  const obj1 = new yourStack();
  obj1.push(-10);
  obj1.push(20);
  obj1.push(-1);
  obj1.push(100);
  obj1.push(0);
  obj1.push(11);
  obj1.pop();
  obj1.pop();
  console.log(obj1.top());
  console.log('o(1) wala',obj1.min());
  
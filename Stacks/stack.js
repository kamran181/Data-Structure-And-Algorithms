// stack implementation using class
class Stack {
    constructor() {
      this.data = [];
      this.length = 0;
    }
  
    peek() {
      if (this.length === 0) return 'Stack empty';
  
      return this.length;
    }
  
    push(element) {
      this.data[this.length] = element;
      this.length++;
    }
  
    pop() {
      if (this.length === 0) return 'No elements in stack';
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  
  const stack = new Stack();
  console.log(stack.peek());
  console.log(stack.pop());
  stack.push(100);
  stack.push(200);
  console.log(stack.peek());
  console.log(stack.pop());
  console.log(stack.peek());
  
//A queue is a data structure that follows the First-In-First-Out (FIFO) principle. It is a collection of elements where elements are added at the rear end and removed from the front end. A queue can be implemented using an array or a linked list in JavaScript.

/**
 * QueueUsingArray class implements the opertions of queue using array
 */
export class QueueUsingArray {
    constructor() {
      this.array = [];
    }
  
    /**
     * enQueue method push the element
     * Time Complexity O(1)
     * @param {*} value
     */
  
    enQueue(value) {
      this.array.push(value);
    }
  
    /**
     * deQueue removes the element from array at the beginning
     * Time Complexity O(1)
     * @returns
     */
  
    deQueue() {
      if (this.isEmpty()) {
        return 'underflow';
      }
  
      return this.array.shift();
    }
  
    /**
     * peek method returns the first element of an array
     * Time Complexity 0(1)
     * @returns
     */
  
    peek() {
      return this.array[0];
    }
  
    /**
     * size method return the size of the queue
     * Time Complexity O(1)
     * @returns
     */
  
    size() {
      return this.array.length;
    }
  
    /**
     * isEmpty method return true, flase depends upon the length of the queue
     * Time Complexity O(1)
     * @returns
     */
  
    isEmpty() {
      return this.array.length === 0;
    }
  
    /**
     * clear method clears the queue
     * Time Complexity O(1)
     */
  
    clear() {
      this.array = [];
    }
  }
  
  const data = new QueueUsingArray();
  data.enQueue(10);
  data.enQueue(20);
  data.enQueue(30);
  data.enQueue(40);
  data.deQueue();
  console.log(data.size());
  console.log(data.peek());
  console.log(data.isEmpty());

  
  //@2 circular queue 

  class circularQueue {
    constructor(capacity) {
      this.items = new Array(capacity);
      this.capacity = capacity;
      this.currentLength = 0;
      this.front = -1;
      this.rear = -1;
    }
  
    isFull() {
      return this.currentLength === this.capacity;
    }
  
    isEmpty() {
      return this.currentLength === 0;
    }
  
    enqueu(val) {
      if (!this.isFull()) {
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = val;
        this.currentLength += 1;
  
        if (this.front === -1) {
          this.front = this.rear;
        }
      }
    }
  
    dequeue() {
      if (!this.isEmpty()) {
        let item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if (this.isEmpty()) {
          this.front = -1;
          this.rear = -1;
        }
        return item;
      }
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.front];
      }
      return null;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log('queue is empty');
      } else {
        let i;
        let str = '';
        for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
          str += this.items[i] + ' ';
        }
  
        str += this.items[i];
        console.log(str);
      }
    }
  }
  
  const queue = new circularQueue(5);
  console.log(queue.isEmpty());
  queue.enqueu(10);
  queue.enqueu(20);
  queue.enqueu(30);
  queue.enqueu(40);
  queue.enqueu(50);
  console.log(queue.isFull());
  console.log(queue.peek());
  queue.print();
  console.log(queue.dequeue());
  console.log(queue.peek());
  queue.enqueu(60);
  queue.print();
  
/**
 * MyArray class has the operations of array
 * e.g push, pop, get, insert, shift
 */

class myArray {
    constructor() {
      this.data = {};
      this.length = 0;
    }
  
    /**
     * get method return the array element of given index
     * Time Complexity - O(1)
     * @param {*} index
     */
  
    get(index) {
      if (index > this.length - 1) {
        return 'index out of bound';
      }
      return this.data[index];
    }
  
    /** push method inserts the element in the last of array
     * Time Complexity - O(1)
     * @param {*} element
     */
  
    push(element) {
      this.data[this.length] = element;
      this.length++;
    }
  
    /**
     * pop method removes the last element of an array
     * Time Complexity - O(1)
     */
  
    pop() {
      delete this.data[this.length - 1];
      this.length--;
    }
  
    /**
     * shift method removes the element at specific index and shifts the adjecent elements to left
     * Time Complexity - O(n)
     * @param {*} index
     */
  
    shift(index) {
      if (index > this.length - 1) {
        return 'index not found';
      }
  
      this.shiftElement(index);
    }
  
    shiftElement(index) {
      for (let i = index; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
    /**
     * insert method inserts the element at specific location and shifts the remaining elements of array towards right
     * Time Complexity - O(n)
     * @param {*} index
     * @param {*} element
     */
    insert(index, element) {
      if (index >= this.length) {
        this.push(element);
        return;
      }
      for (let i = this.length; i > index; i--) {
        this.data[i] = this.data[i - 1];
      }
  
      this.data[index] = element;
      this.length++;
    }
  }
  
  const data = new myArray();
  data.push(10); //0
  data.push(20); //1
  data.push(30); // 2
  data.push(40); //3
  data.insert(1, 50);
  console.log(data.get(0));
  console.log(data.get(1));
  console.log(data.get(2));
  console.log(data.get(3));
  data.insert(5, 70);
  console.log(data.get(4));
  console.log(data.get(5));
  data.insert(10, 100);
  console.log(data.get(6));
  data.pop();
  console.log(data.get(6));
  data.shift(2);
  console.log(data.get(2));
  console.log(data.length);
  
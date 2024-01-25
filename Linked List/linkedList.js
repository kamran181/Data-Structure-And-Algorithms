/**
 * class Node create a linked list instance and sets the value property and next pointer to null
 */

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  /**
   * SinglyLinkedList class performs the operation of singly linked list
   */
  
  export class SinglyLinkedList {
    constructor(value) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    }
  
    /**
     * append method appends the linked list node to end of the list
     * Time Complexity - O(1)
     * @param {*} value
     * @returns
     */
  
    append(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  
    /**
     * prepend method attached the linked list node at the beginning of the list
     * Time Complexity O(1)
     * @param {*} value
     * @returns
     */
  
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  
    /**
     * printList method pushes the linked lists value in an array and returns that array
     * Time Complexity 0(n)
     * @returns
     */
  
    printList() {
      const printList = [];
      let currentNode = this.head;
      while (currentNode) {
        printList.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return printList;
    }
  
    /**
     * insert method inserts the linked list at the given index, if index is greater than length of linked list is appends at the end
     * if index is 0 it prepends the linked list at the beginning
     * Time Complexity O(n)
     * @param {*} index
     * @param {*} value
     * @returns
     */
  
    insert(index, value) {
      if (index >= this.length) {
        return this.append(value);
      }
      if (index === 0) {
        return this.prepend(value);
      }
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index - 1);
      newNode.next = leader.next;
      leader.next = newNode;
      this.length++;
      return this.printList();
    }
  
    /**
     * remove method removes the node from linked list at given index.
     * Time Complexity 0(n)
     * @param {*} index
     * @returns
     */
  
    remove(index) {
      if (index === 0) {
        this.head = this.head.next;
        this.length--;
        return this;
      }
      const leader = this.traverseToIndex(index - 1);
      const unWantedNode = leader.next;
      leader.next = unWantedNode.next;
      this.length--;
      return this;
    }
  
    /**
     * reverse method reverses the linked list
     * Time Complexity O(n)
     */
  
    reverse(){
      let first = this.head;
      let second = first.next;
      while(second){
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      this.head.next = null;
      this.head = first;
    }
  
    /**
     * traverseToIndex method traverse to linked list untill index - 1 and returns that node
     * Time complexity O(n)
     * @param {*} index
     * @returns
     */
  
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter < index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  }

const linkedList = new SinglyLinkedList(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(100);
console.log(linkedList.printList());
console.log(linkedList.traverseToIndex(2));
console.log(linkedList.insert(1, 500));
console.log(linkedList.remove(1));
console.log(linkedList.reverse())
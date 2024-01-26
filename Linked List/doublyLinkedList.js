/**
 * Node class is an instance of linked list node with a property of value and pointer to  next, prev location to null
 */
class Node {
    constructor(value) {
      this.previous = null;
      this.value = value;
      this.next = null;
    }
  }

  /**
 * DoublyLinkedList class performs the operation of singly linked list
 */
  class DoublyLinkedList {
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
    newNode.previous = this.tail;
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
    this.head.previous = newNode;
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
        if (index === 0) {
          return this.prepend(value);
        }
        if (index >= this.length) {
          return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const leader2 = leader.next;
        newNode.next = leader2;
        leader2.previous = newNode;
        newNode.previous = leader;
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
      this.head.previous = null;
      this.length--;
      return this.printList();
    }
    if (index === this.length - 1) {
      this.tail = this.tail.previous;
      this.tail.next = null;
      this.length--;
      return this.printList();
    }

    let leader = this.traverseToIndex(index - 1);
    let unWantedNode = leader.next;
    leader.next = unWantedNode.next;
    let temp = unWantedNode.next;
    temp.previous = leader;
    this.length--;
    return this.printList();
  }


   /**
   * reverse method reverses the linked list
   * Time Complexity O(n)
   */

   reverse() {
    let currentNode = this.head;

    while (currentNode) {
      let temp = currentNode.next;
      currentNode.next = currentNode.previous;
      currentNode.previous = temp;
      currentNode = temp;
    }
    let tempHead = this.head;
    this.head = this.tail;
    this.tail = tempHead;
    return this.printList();
  }

    /**
   * traverseToIndex method traverse to linked list untill index - 1 and returns that node
   * Time complexity O(n)
   * @param {*} index
   * @returns
   */


    traverseToIndex(index) {
        let currentNode = this.head;
        let counter = 0;
        while (counter < index) {
          currentNode = currentNode.next;
          counter++;
        }
        return currentNode;
      }
    }

    
const doubly = new DoublyLinkedList(10);
doubly.append(20);
doubly.prepend(200);
console.log(doubly.printList());
console.log(doubly.insert(2, 500));
doubly.append(1000);
console.log(doubly.printList());
console.log(doubly.remove(2));
console.log(doubly.reverse());
console.log(doubly.reverse());

// A Doubly Linked List is a linked data structure that consists of a
// set of sequentially linked records called nodes.
// Each node contains two fields, called links, that are references to the
// previous and to the next node in the sequence of nodes.

class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  remove(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head.previous = null;
        } else if (current === this.tail) {
          this.tail = this.tail.previous;
          this.tail.next = null;
        } else {
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
        this.length--;
      }
      current = current.next;
    }
  }
  insertAfter(data, toNodeData) {
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data);
        if (current === this.tail) {
          this.add(data);
        } else {
          current.next.previous = node;
          node.previous = current;
          node.next = current.next;
          current.next = node;
          this.length++;
        }
      }
      current = current.next;
    }
  }
  traverse(fn) {
    let current = this.head;
    while (current) {
      if (fn) {
        fn(current);
      }
      current = current.next;
    }
  }
  traverseReverse(fn) {
    let current = this.tail;
    while (current) {
      if (fn) {
        fn(current);
      }
      current = current.previous;
    }
  }
  length() {
    return this.length;
  }
  print() {
    let string = '';
    let current = this.head;
    while (current) {
      string += current.data + ' ';
      current = current.next;
    }
    console.log(string.trim());
  }
}

const doublyLinkedList = new DoublyLinkedList();

// doublyLinkedList.print();
// doublyLinkedList.add(1);
// doublyLinkedList.add(2);
// doublyLinkedList.add(3);
// doublyLinkedList.add(4);
// doublyLinkedList.print();

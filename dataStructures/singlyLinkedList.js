// an ordered set of objects, each containing a link to the next piece of data.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(data) {
    const nodeToAdd = new Node(data);
    let current = this.head;

    if (!current) {
      this.head = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }

    while (current.next) {
      current = current.next;
    }

    current.next = nodeToAdd;
    this.length++;

    return nodeToAdd;
  }

  get(num) {
    if (num > this.length) return "Doesn't Exist!";

    let current = this.head;
    let count = 1;

    while (count < num) {
      current = current.next;
      count++;
    }

    return current;
  }

  remove(num) {
    if (num > this.length) return "Doesn't Exist!";

    let current = this.head;
    let count = 1;
    let prevNode = null;

    if (num === 1) {
      this.head = head.next;
      this.length--;

      return this.head;
    }

    while (count < num) {
      prevNode = current;
      current = current.next;
      count++;
    }

    prevNode.next = current.next;
    this.length--;

    return this.head;
  }
}

const List = new LinkedList();

List.add('Luke');
List.add('Leia');
List.add('R2D2');
List.get(1);
List.remove(2);
// console.log(List);
// console.log(List.get(1))
// console.log(List.remove(0))
// console.log(List);

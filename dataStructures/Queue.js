// Queue's follow a First In First Out (FIFO) paradigm.
// Can be used when processing structured data
// (e.g. when examining nodes in a tree, the sibling nodes can be queued for processing)

class Queue {
  constructor() {
    this.items = [];
  }
  print() {
    console.log(this.items);
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const myQueue = new Queue();

// myQueue.enqueue('Steven');
// myQueue.enqueue('Jeff');
// myQueue.peek();
// myQueue.size();
// myQueue.isEmpty();

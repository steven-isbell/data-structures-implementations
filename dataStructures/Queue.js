// Queue's follow a First In First Out (FIFO) paradigm.
// Can be used when processing structured data
// (e.g. when examining nodes in a tree, the sibling nodes can be queued for processing)

class Queue {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(collection);
  }
  enqueue(element) {
    collection.push(element);
  }
  dequeue() {
    return collection.shift();
  }
  front() {
    return collection[0];
  }
  size() {
    return collection.length;
  }
  isEmpty() {
    return collection.length === 0;
  }
}

const myQueue = new Queue();

// myQueue.add('Steven');
// myQueue.add('Jeff');
// myQueue.front();
// myQueue.size();
// myQueue.isEmpty();

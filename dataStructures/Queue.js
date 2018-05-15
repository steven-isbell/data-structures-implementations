class Queue {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(collection);
  }
  add(element) {
    collection.push(element);
  }
  remove() {
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

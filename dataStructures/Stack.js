// A stack can be more or less implemented using a standard JS Array.
// This is an implementation that brings standard array functionality
// into a single structure.

// Stacks follow a First In Last Out (FILO) paradigm.

class Stack {
  constructor() {
    this.items = [];
  }
  push(val) {
    this.items.push(val);
  }
  pop() {
    if (this.items.length == 0) return 'Stack is Empty';
    return this.items.pop();
  }
  currentItem() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printStack() {
    return this.items;
  }
  size() {
    return this.items.length;
  }
}

const myStack = new Stack();

// myStack.push('Steven');
// myStack.push('Jeff');
// myStack.currentItem();
// myStack.isEmpty();
// myStack.size();

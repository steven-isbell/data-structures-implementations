// A stack can be more or less implemented using a standard JS Array.
// This is an implementation that brings standard array functionality
// into a single structure.

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
    let str = '';
    for (var i = 0; i < this.items.length; i++) {
      str += `${this.items[i]} `;
    }
    return str;
  }
  size() {
    return this.items.length;
  }
}

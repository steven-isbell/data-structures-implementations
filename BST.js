class BST {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  insert(value) {
    if (value === this.value) return 'No Duplicate Vertices';

    if (value <= this.value) {
      if (!this.left) this.left = new BST(value);
      else this.left.insert(value);
    } else if (value > this.value) {
      if (!this.right) this.right = new BST(value);
      else this.right.insert(value);
    }
  }

  find(data) {
    let current = this;
    while (current.value !== data) {
      if (data < current.value) current = current.left;
      else current = current.right;
      if (current === null) return `Doesn't Exist In Tree`;
    }
    return current;
  }

  getMin() {
    let current = this;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  getMax() {
    let current = this;
    while (current.right !== null) {
      current = current.right;
    }
    return current;
  }
}

const bst = new BST(23);

bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(5);
bst.insert(7);

// console.log(bst);

// bst.getMin();
// bst.getMax();

// bst.find(6);

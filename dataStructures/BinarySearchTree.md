## Binary Search Tree (BST)

A BST is a binary tree where nodes are ordered in the following way:
* each node contains one key (also known as data)
* the keys in the left subtree are less then the key in its parent node
* the keys in the right subtree are greater the key in its parent node
* duplicate keys are not allowed

__A BST is a root comprised of subtree after subtree__
```
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
```
![Binary Search Tree Visualization](https://upload.wikimedia.org/wikipedia/commons/9/9b/Binary_search_tree_example.gif)

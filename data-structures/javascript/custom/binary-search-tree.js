/*
1. Value of each LEFT node must be smaller than PARENT node
2. Value of each RIGHT node must be greater than PARENT node
3. Each node having AT MOST 2 children

left node < PARENT < right node

Searching, Sorting, Abstract Data Types (ADT) such as look up tables and
priority queues

TRAVERSING:
1. Depth First Search (DFS):
  - starts at root node
  - explores as far as possible on each branch before backtracking
  - ex: start root, visit all left nodes, backtrack, visit all right nodes
  - 3 types:
    1. PreOrder:  root node, visit all left, visit right while backtracking
    2. InOrder:   visit all left, parent node, visit right while backtracking
    3. PostOrder: visit all left, visit right, parent node
2. Breadth First Search (BFS):
  - explore all nodes at present depth before moving next depth level
  Steps:
    1. Create a queue
    2. Enqueue the root node
    3. If a node exists in queue:
      - Dequeue the node from the front
      - Read node's value
      - Enqueue the node's left child if exists
      - Enqueue the node's right child if exists

 */

const Queue = require('./queue-object');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  // DFS
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  // DFS
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  // DFS
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  // BFS
  levelOrder() {
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size()) {
      let curr = queue.dequeue();
      console.log(curr.value);
      if (curr.left) {
        queue.enqueue(curr.left);
      }
      if (curr.right) {
        queue.enqueue(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
console.log('Tree is Empty? ', bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 20));

console.log('PreOrder');
bst.preOrder(bst.root); // 10, 5, 3, 7, 15

console.log('InOrder');
bst.inOrder(bst.root); // 3, 5, 7, 10, 15

console.log('PostOrder');
bst.postOrder(bst.root); // 3, 7, 5, 15, 10

console.log('BFS - Level Order');
bst.levelOrder(bst.root); // 10, 5, 15, 3, 7

console.log('Max Node');
console.log(bst.max(bst.root)); // 15

console.log('Min Node');
console.log(bst.min(bst.root)); // 3

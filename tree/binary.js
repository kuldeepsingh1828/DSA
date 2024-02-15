//binary tree example
//binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.

//binary tree example
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    // In-order traversal: Left -> Root -> Right
    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Pre-order traversal: Root -> Left -> Right
    preOrderTraversal(node = this.root) {
        if (node !== null) {
            console.log(node.value);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    // Post-order traversal: Left -> Right -> Root
    postOrderTraversal(node = this.root) {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value);
        }
    }
}

// search for a node with given data
function search(root, value) {
    // Base case: if root is null or if the value is found at the root
    console.log(root);
    if (root === null || root.value === value) {
        return root;
    }
    // If the value to be searched is greater than the root's value, search in the right subtree
    if (root.value < value) {
        return search(root.right, value);
    }
    // If the value to be searched is smaller than the root's value, search in the left subtree
    return search(root.left, value);
}
// Example usage:
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log(search(tree, 101));

/*
console.log("In-order traversal:");
tree.inOrderTraversal();
*/
/*
console.log("Pre-order traversal:");
tree.preOrderTraversal();
console.log("Post-order traversal:");
tree.postOrderTraversal();
*/

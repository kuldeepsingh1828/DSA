class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function searchInBST(root, value) {
    // Base case: if root is null or if the value is found at the root
    if (root === null || root.value === value) {
        return root;
    }
    // If the value to be searched is greater than the root's value, search in the right subtree
    if (root.value < value) {
        return searchInBST(root.right, value);
    }
    // If the value to be searched is smaller than the root's value, search in the left subtree
    return searchInBST(root.left, value);
}

// Example usage:
// Create a sample binary search tree
const root = new TreeNode(8);
root.left = new TreeNode(3);
root.right = new TreeNode(10);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);
root.right.right = new TreeNode(14);
root.left.right.left = new TreeNode(4);
root.left.right.right = new TreeNode(7);

// Search for a value in the binary search tree
const searchValue = 7;
const result = searchInBST(root, searchValue);
if (result) {
    console.log(`Value ${searchValue} found in the binary search tree.`);
} else {
    console.log(`Value ${searchValue} not found in the binary search tree.`);
}

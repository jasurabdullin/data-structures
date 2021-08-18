// In a tree, a node holds some data as well as its "children", which are other nodes that are under the parent node
// A tree has a parent-child relationship among its nodes
// Traversing a tree means iterating through the nested nodes of a tree
// There are different orders of traversal such as Breadth-First Traversal and Depth-First Traversal


// 1) Create a node class.  The constructor should accept an argument that gets assigned to the data property and initialize an empty array for storing children. 
// The node class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF' on the tree class.  Each method should accept a function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(func) {
        const array = [this.root];
        while (array.length) {
            const node = array.shift();
            array.push(...node.children);
            func(node);
        }
    }

    traverseDF(func) {
        const array = [this.root];
        while (array.length) {
            const node = array.shift();
            array.unshift(...node.children);
            func(node);
        }
    }
};

module.exports = { Tree, Node };
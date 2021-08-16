// Create a stack data structure.  The stack should be a class with methods 'push', 'pop', and'peek'.  
// Adding an element to the stack should store it until it is removed.

// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1


// A stack, similar to a queue, is an ordered list of records. Adding a record is referred to as "pushing" and removing a record is known as "popping".
// FILO - First In Last Out OR LIFO - Last In First Out

class Stack {
    constructor(){
        this.data = [];
    }

    push(record) {
        this.data.push(record)
    }

    pop(record) {
        return this.data.shift(record)
    }
};

module.exports = Stack;

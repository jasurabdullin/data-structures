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

    pop() {
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1];
    }
};

module.exports = Stack;


// EXERCISE

// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back at the Queue exercise.

// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

class Queue {
    constructor(){
        this.firstStack = new Stack();
        this.secondStack = new Stack();
    }

    add(record) {
        this.firstStack.push(record);
    }

    remove() {
        while (this.firstStack.peek()) {
            const record = this.firstStack.pop()
            this.secondStack.push(record);
        }

        const record = this.secondStack.pop();

        while (this.secondStack.peek()) {
            const record = this.secondStack.pop()
            this.firstStack.push(record);
        }

        return record;
    }

    peek() {
        while (this.firstStack.peek()) {
            this.secondStack.push(this.firstStack.pop());
        }

        const record = this.secondStack.peek();

        while (this.secondStack.peek()) {
            this.firstStack.push(this.secondStack.pop());
        }

        return record;
    }
};

module.exports = Queue;
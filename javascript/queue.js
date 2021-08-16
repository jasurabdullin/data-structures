// Create a queue data structure.  The queue should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until it is removed.
// FIFO - First In First Out

// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// A queue can be thought of as a container where a record enters on one end of the container and exits on the other
// Analogy: A line of people waiting to get train tickets

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;

// EXERCISE

// Implement the 'weave' function.  Weave receives two queues as arguments and combines the contents of each into a new, third queue.
// The third queue should contain the *alterating* content of the two queues.
// The function should handle queues of different lengths without inserting 'undefined' into the new one.
// *Do not* access the array inside of any queue, only use the 'add', 'remove', and 'peek' functions.

// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const weave = (queueOne, queueTwo) => {
  const queue = new Queue();

  while (queueOne.peek() || queueTwo.peek()) {
    if (queueOne.peek()) {
      queue.add(queueOne.remove());
    }
    if (queueTwo.peek()) {
      queue.add(queueTwo.remove());
    }
  }

  return queue;
};

module.exports = weave;

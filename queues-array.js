const queues = [];

// enqueue, add to last of queue
// like paying for your grocery items you start by inserting yourself in the last of the line
queues.push('Alex')
queues.push('Red')
queues.push('Zack')

// dequeue, remove the first in queue
// After you pay for your grocery items you remove yourself from the line so that the next customer can pay
queues.shift();

console.log(queues)

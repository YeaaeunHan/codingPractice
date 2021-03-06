/*********************************************************************** 
Source LeetCode
232 Implement Queue using Stacks
(https://leetcode.com/problems/implement-queue-using-stacks/)
1st 2022-04-19

Implement a first in first out (FIFO) queue using only two stacks. 
The implemented queue should support all the functions of a normal queue 
(push, peek, pop, and empty).

Implement the MyQueue class:
    void push(int x) Pushes element x to the back of the queue.
    int pop() Removes the element from the front of the queue and returns it.
    int peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.

Notes:
    You must use only standard operations of a stack, which means only push 
    to top, peek/pop from top, size, and is empty operations are valid.
    Depending on your language, the stack may not be supported natively. 
    You may simulate a stack using a list or deque (double-ended queue) as 
    long as you use only a stack's standard operations.

************************************************************************/

// 1st Attempt
// LOGIC : consider as array
var MyQueue = function() {
    this.stack1 = [];
};

// @param {number} x
// @return {void}
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

// @return {number}
MyQueue.prototype.pop = function() {
    return  this.stack1.shift();
};

// @return {number}
MyQueue.prototype.peek = function() {
    return this.stack1[0];
};

// @return {boolean}
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0;
};

// 2nd Attempt
// LOGIC : Going back and forth of 2 stacks
// Using only standard operations of stack
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

// @param {number} x
// @return {void}
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

// @return {number}
MyQueue.prototype.pop = function() {
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop());
    }
    let pop = this.stack2.pop();
    while(this.stack2.length){
        this.stack1.push(this.stack2.pop());
    }
    return pop;
};

// @return {number}
MyQueue.prototype.peek = function() {
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop());
    }
    let peek = this.stack2[this.stack2.length-1];
    while(this.stack2.length){
        this.stack1.push(this.stack2.pop());
    }
    return peek;
};

// @return {boolean}
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 * 
 * Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
 */
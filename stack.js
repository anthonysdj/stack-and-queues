class Stack {
    constructor() {
        // this is where we stack the new entries
        this.items = [];
        // this will be the total count of the items in the stack
        this.count = 0;
    }

    // add element to top of stack
    // last element added will be at the top of the stack
    push(el) {
        // save the current position of the item in the stack
        // not using array push
        const position = this.count;
        this.items[this.count] = el;

        console.log(`${el} added to ${position}`);

        // one item has been added so we increase the count
        this.count += 1;

        // return the position of the added element
        return position;
    }

    // remove the last added element
    // return undefined if stack is 0
    pop() {
        if (this.count === 0) return undefined;

        // get the last added element
        const deletedElement = this.items[this.count - 1];

        // filter the items and do not include the removed element
        // not using array pop
        this.items = this.items.filter((item) => {
            return item != deletedElement;
        });

        // reduce the count because we removed one element
        this.count -= 1;

        console.log(`removed ${deletedElement} from stack`);

        // return the removed element
        return deletedElement;
    }

    // return top element in stack
    peek() {
        const topElement = this.items[this.count - 1];
        console.log(`${topElement} is on the top of the stack.`);
        return topElement;
    }

    // check if stack if empty
    isEmpty() {
        const empty = this.count < 1;
        console.log(empty ? "Stack is empty" : `Stack count: ${this.count}`);
        return empty;
    }

    // get size of stack
    size() {
        console.log(`size of stack: ${this.count}`);
        return this.count;
    }

    // print stack elements
    print() {
        let str = "";

        // loop through the count and append to the str var so we can print the items
        for (let index = 0; index < this.count; index++) {
            str += index + " => " + this.items[index] + " ";
        }

        console.log(str);
        console.log(this.items);

        return str;
    }

    // reset the stack
    clear()
    {
        this.items = []
        this.count = 0
        console.log(`items:${this.items}, stack_count:${this.count}`);

        return this.items;
    }
}

const stack = new Stack();

stack.isEmpty();
stack.push(100);
stack.push(200);
stack.push(300);
stack.size();
stack.pop();
stack.peek();
stack.isEmpty();
stack.print();
stack.clear();
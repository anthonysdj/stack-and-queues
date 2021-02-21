class Stack {
    constructor() {
        this.items = [];
        this.count = this.items.length;
    }

    push(item) {
        this.items.push(item);

        console.log(`added ${item} at ${this.index()}`);

        this.updateCount();

        // return the new item
        return item;
    }

    pop() {
        const topItemIndex = this.index();
        const deletedItem = this.items.pop();

        console.log(`deleted ${deletedItem} at ${topItemIndex}`);

        this.updateCount();

        // return the deleted item
        return deletedItem;
    }

    isEmpty() {
        const empty =
            this.count < 1
                ? "stack is empty"
                : `stack has ${this.count} item(s)`;
        console.log(empty);
        return empty;
    }

    size() {
        console.log(`stack size: ${this.count}`);

        return this.count;
    }

    peek() {
        const topItem = this.items[this.index()];
        console.log(`top of stack is ${topItem}`);
        return topItem;
    }

    print() {
        let str = "items: ";

        for (let index = 0; index < this.count; index++) {
            str += `${index} => ` + this.items[index] + " ";
        }

        console.log(str);

        return str;
    }

    clear() {
        this.items = [];
        this.count = 0;

        console.log("stack reset");
        console.log(`items: ${this.items}`);
        console.log(`count: ${this.count}`);
    }

    index() {
        return this.items.length < 1 ? 0 : this.items.length - 1;
    }

    updateCount() {
        this.count = this.items.length;
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

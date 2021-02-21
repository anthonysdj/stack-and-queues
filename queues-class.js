class GroceryCounter {
    constructor() {
        this.customers = [];
        this.customersInLine = 0;
    }

    enqueue(newCustomer) {
        this.customers[this.customersInLine] = newCustomer;
        this.customersInLine += 1;
        console.log(`${newCustomer} went in line ${this.customersInLine}`);
    }

    dequeue() {
        const customerOut = this.customers[0];
        this.customers = this.customers.filter((cust) => {
            return cust !== customerOut;
        });
        this.customersInLine -= 1;

        console.log(`${customerOut} was eradicated from the line`);
        console.log(`${this.customers[0]} now takes over the first spot of the line`);

        return customerOut;
    }

    totalQueues() {
        console.log(`number of customers in line is: ${this.customersInLine}`);
        return this.customersInLine;
    }

    queuedCustomers() {
        console.log(this.customers);
        return this.customers;
    }
}

const queues = new GroceryCounter();
queues.enqueue("Lambert");
queues.enqueue("Orthrus");
queues.enqueue("Cid");
queues.dequeue();
queues.totalQueues();
queues.queuedCustomers();

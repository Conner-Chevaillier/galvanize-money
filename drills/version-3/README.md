## Scenario

You are writing a cash register application for a clothing store. Your job is to write the code necessary to solve 3 of their needs.

## Instructions

1. Run `npm install`
1. Run `npm test` - you should see a bunch of failing tests. Your goal is to get them to pass!
1. Add your code to the existing `app/index.js` file
1. Include a screenshot of all passing tests with your submission

### Test 1 - Adding a transaction to the register

For this test, you'll need to:

* Create a `register` object that has an empty array in it called `transactions`
* Write a function called `addTransaction` that takes a transaction object and adds it to the transactions array in register
    * A transaction object looks like this:

```js
{
    date: new Date("2017-01-01"),
    cashier: "Kyle",
    items: [{
        id: 1,
        price: 1.00,
        description: "Mittens",
        quantity: 1
    },{
        id: 2,
        price: 2.00,
        description: "Hat",
        quantity: 2
    }]
}
```

* Write a function called `reset` that empties the `transactions` array

### Test 2 - Getting a transaction for a particular salesperson

* Keep your code from the previous test
* Write a function named `getTransactionsBySalesperson` that takes a salesperson's name to get an array of all of a particular salesperson's transactions
    * Reference the format of the above object

### Test 3 - Removing the latest transaction

* Keep your code from the previous test
* Write a function named `removeLastTransaction` that removes the most recently added transaction from the register

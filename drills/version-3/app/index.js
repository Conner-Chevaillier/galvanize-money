var register = {
    transactions: []
};

function addTransaction(transaction){
    register.transactions.push(transaction);
}

function getTransactionsBySalesperson(salesperson){
    var transactions = [];
    for (let i = 0; i < register.transactions.length; i++){
        let currentTransaction = register.transactions[i];
        if (currentTransaction.cashier === salesperson){
            transactions.push(currentTransaction);
        }
    }
    return transactions;
}

function removeLastTransaction(){
    return register.transactions.pop();
}

function reset(){
    register.transactions = [];
}

module.exports = {
    register,
    addTransaction,
    getTransactionsBySalesperson,
    removeLastTransaction,
    reset
};

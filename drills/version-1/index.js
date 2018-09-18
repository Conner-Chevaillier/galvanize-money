var register = {
    transactions: []
}

function addTransaction(transaction) {
    register.transactions.push(transaction)
}

function reset() {
    register.transactions = []
}

function getTotal() {
    let total = 0;
    for (var i = 0; i < register.transactions.length; i++) {
        for (var j = 0; j < register.transactions[i].items.length; j++) {
            total += register.transactions[i].items[j].price * register.transactions[i].items[j].quantity
        }
    }
    return total
}

function getFormattedTotal() {
    return getTotal().toFixed(2);
}





module.exports = {
    // Uncomment these as you define them
    register,
    addTransaction,
    getTotal,
    getFormattedTotal,
    reset,
}
var register = {
    transactions: []
}

function addTransaction(transaction){
    register.transactions.push(transaction);
}

function getTotal(){
    var total = 0;
    for (let i = 0; i < register.transactions.length; i++){
        for (let j = 0; j < register.transactions[i].items.length; j++){
            total += register.transactions[i].items[j].price * register.transactions[i].items[j].quantity;
        }
    }
    return total;
}

function getFormattedTotal(){
    return getTotal().toFixed(2);
}

function reset(){
    register.transactions = [];
}

module.exports = {
    register,
    addTransaction,
    getTotal,
    getFormattedTotal,
    reset,
};

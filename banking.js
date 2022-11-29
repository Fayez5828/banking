
function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText);

    // clear
    inputField.value = '';

    return inputAmount;
}

function updateTotal(updateId, newDepositAmount) {
    // update deposit
    const depositTotal = document.getElementById(updateId);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)

    // previous amount + new input amount

    depositTotal.innerText = previousDepositAmount + newDepositAmount;

}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText)
    return balanceTotalAmount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalAmount = getCurrentBalance()
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount + amount;
    } else {
        balanceTotal.innerText = balanceTotalAmount - amount;
    }
}

document.getElementById("deposit-button").addEventListener('click', function () {

    const newDepositAmount = getInput('deposit-input')
    if (newDepositAmount > 0)
        updateTotal('deposit-total', newDepositAmount);
    updateBalance(newDepositAmount, true)

});

document.getElementById("withdraw-button").addEventListener('click', function () {
    const withdrawInputAmount = getInput('withdraw-input')
    const currentBalance = getCurrentBalance()
    if (withdrawInputAmount > 0 && withdrawInputAmount < currentBalance) {
        updateTotal('withdraw-total', withdrawInputAmount);
        updateBalance(withdrawInputAmount, false)

    }

    if (withdrawInputAmount > currentBalance) {
        const error = document.getElementById('error');
        error.innerText = 'Something Wents Wrong'
    }

});
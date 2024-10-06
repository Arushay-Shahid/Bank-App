let balance = 1000;
const history = [];

function updateBalance() {
    document.getElementById("balance").innerText = balance.toFixed(2);
}

function deposit() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (amount > 0) {
        balance += amount;
        history.push(`Deposited: $${amount.toFixed(2)}`);
        document.getElementById("amount").value = '';
        updateBalance();
        updateHistory();
    } else {
        alert("Please enter a valid amount.");
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        history.push(`Withdrew: $${amount.toFixed(2)}`);
        document.getElementById("amount").value = '';
        updateBalance();
        updateHistory();
    } else {
        alert("Please enter a valid amount or insufficient funds.");
    }
}

function updateHistory() {
    const historyList = document.getElementById("history");
    historyList.innerHTML = '';
    history.forEach(transaction => {
        const listItem = document.createElement("li");
        listItem.textContent = transaction;
        historyList.appendChild(listItem);
    });
}

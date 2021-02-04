const Modal = {
  changeModal() {
    const overlayModal = document.querySelector(".modal-overlay");
    overlayModal.classList.toggle("active");
  },
};

const transactions = [
  {
    id: 1,
    description: "WorkAPP",
    amount: 500000,
    date: "21/01/2021",
  },
  {
    id: 2,
    description: "Electricity Bill",
    amount: -20000,
    date: "21/01/2021",
  },
  {
    id: 3,
    description: "Internet",
    amount: -10000,
    date: "21/01/2021",
  },
  {
    id: 4,
    description: "Wokkkkkking",
    amount: -50000,
    date: "21/01/2021",
  },
];

const Transaction = {
  incomes() {},
  expenses() {},
  amount() {},
};

const balanceCosts = {
  transactionContainer: document.querySelector("#data-table tbody"),
  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = balanceCosts.innerHTMLTransaction(transaction);

    balanceCosts.transactionContainer.appendChild(tr)
  },
  innerHTMLTransaction(transaction) {
    const cssClass = transaction.amount > 0 ? "income" : "expense"

    const amount = Utils.formatCurrency(transaction.amount)

    const html = `
        <tr>
            <td class="description">${transaction.description}</td>
            <td class=${cssClass}>${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img src="assets/minus.svg" alt="remove transactions"></td>
        </tr>`;
    return html;
  },
};

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
    }
}

transactions.forEach(function(transaction){
    balanceCosts.addTransaction(transaction)
})

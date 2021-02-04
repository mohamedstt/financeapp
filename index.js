const Modal = {
  changeModal() {
    const overlayModal = document.querySelector(".modal-overlay");
    overlayModal.classList.toggle("active");
  },
};

const Transaction = {
  all: [
    {
      description: "WorkAPP",
      amount: 500000,
      date: "21/01/2021",
    },
    {
      description: "Electricity Bill",
      amount: -20000,
      date: "21/01/2021",
    },
    {
      description: "Internet",
      amount: -10000,
      date: "21/01/2021",
    },
    {
      description: "Wokkkkkking",
      amount: -50000,
      date: "21/01/2021",
    },
  ],
  add(transaction) {
    Transaction.all.push(transaction);

    App.reload()

  },
  remove(index){
    Transaction.all.splice(index, 1)
    App.reload()
  },
  incomes() {
    let income = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    });
    return income;
  },
  expenses() {
    let expense = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    });
    return expense;
  },
  amount() {
    return Transaction.incomes() + Transaction.expenses();
  },
};

const balanceCosts = {
  transactionContainer: document.querySelector("#data-table tbody"),
  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = balanceCosts.innerHTMLTransaction(transaction);

    balanceCosts.transactionContainer.appendChild(tr);
  },
  innerHTMLTransaction(transaction) {
    const cssClass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
        <tr>
            <td class="description">${transaction.description}</td>
            <td class=${cssClass}>${amount}</td>
            <td class="date">${transaction.date}</td>
            <td><img src="assets/minus.svg" alt="remove transactions"></td>
        </tr>`;
    return html;
  },
  updateBalance() {
    document.getElementById("incomeDisplay").innerHTML = Utils.formatCurrency(
      Transaction.incomes()
    );
    document.getElementById("expenseDisplay").innerHTML = Utils.formatCurrency(
      Transaction.expenses()
    );
    document.getElementById("totalDisplay").innerHTML = Utils.formatCurrency(
      Transaction.amount()
    );
  },
  clearTransactions(){
    balanceCosts.transactionContainer.innerHTML = ""
  }
};

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";
    value = String(value).replace(/\D/g, "");
    value = Number(value) / 100;
    value = value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return signal + value;
  },
};

const Form = {
  submit(event) {
    console.log(event);
  }
}

const App = {
  init() {
    Transaction.all.forEach((transaction) => {
      balanceCosts.addTransaction(transaction);
    });

    balanceCosts.updateBalance()
  },
  reload() {
    balanceCosts.clearTransactions()
    App.init()
  },
};

App.init();


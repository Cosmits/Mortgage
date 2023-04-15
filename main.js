const banks = [
    {
        id: "435tr34wrt",
        name: "Mono",
        interestRate: 5,
        maxLoan: 500000,
        minPayment: 1000,
        loanTerm: 12,
    },
    {
        id: "asdfw342rew5",
        name: "Privat",
        interestRate: 7,
        maxLoan: 1000000,
        minPayment: 5000,
        loanTerm: 50,
    },
];

const divRoot = document.getElementById('root');


const banksListContainerEl = document.createElement("div");
banksListContainerEl.classList.add("banksListContainer");

const itemBankContainerEl = document.createElement("div");
itemBankContainerEl.classList.add("itemBankContainer");

divRoot.append(banksListContainerEl , itemBankContainerEl);


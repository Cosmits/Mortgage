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

const divRoot = document.getElementById("root");

const banksListContainerEl = document.createElement("div");
banksListContainerEl.classList.add("banksListContainer");

const itemBankContainerEl = document.createElement("div");
itemBankContainerEl.classList.add("itemBankContainer");

divRoot.append(banksListContainerEl, itemBankContainerEl);

function renderBankList(banks) {
    const bankList = document.createElement("ul");

    banksListContainerEl.append(bankList);
    bankList.classList.add("bankList");

    const bankItems = banks.map(
        (bank) => `
        <li class='bankItems'>
            <p>${bank.name}</p>
            <div class="bank-btn-wrap">
                <button type="button" class="bank-items-btn">Edit
                <svg class="bank-icon"  width="24" height="20">
                <use href="./img/javascript.svg#icon-library" width= "24" height="20"></use>
                </svg>
                </button>
                <button type="button" class="bank-items-btn">Delete
                 <svg class="bank-icon"  width="24" height="20">
                <use href="./img/javascript.svg#icon-bin2" width="24" height="20"></use>
                 </svg>
                </button>
            </div>
        </li>`
    );

    // console.log(bankItems);

    bankList.insertAdjacentHTML("beforeend", bankItems.join(" "));
    renderNewBankButton();

    document.querySelectorAll('.bankItems').forEach(element => {
        // console.log(element);
        element.addEventListener('click', () => {
            // console.dir(element.firstElementChild.textContent);
            console.log(findBankByName(element.firstElementChild.textContent, banks));
        })
    });
}

const findBankByName = (bankName, banks) => {
    return banks.find(bank => bank.name === bankName)
};

function renderNewBankButton() {
    const addBankBtn = document.createElement("button");

    addBankBtn.textContent = "Add bank";
    banksListContainerEl.append(addBankBtn);
}

renderBankList(banks);
import { findBankById } from '../utils/findBankById';
import bankInformation from '../utils/bankInfoMarkup';

const banks = [
  {
    id: '435tr34wrt',
    name: 'Mono',
    interestRate: 5,
    maxLoan: 500000,
    minPayment: 1000,
    loanTerm: 12,
  },
  {
    id: 'asdfw342rew5',
    name: 'Privat',
    interestRate: 7,
    maxLoan: 1000000,
    minPayment: 5000,
    loanTerm: 50,
  },
];

const divRoot = document.getElementById('root');

const banksListContainerEl = document.createElement('div');
banksListContainerEl.classList.add('banksListContainer');

const itemBankContainerEl = document.createElement('div');
itemBankContainerEl.classList.add('itemBankContainer');

divRoot.append(banksListContainerEl, itemBankContainerEl);

const bankList = document.createElement('ul');
banksListContainerEl.append(bankList);
bankList.classList.add('bankList');

function renderBankList(banks) {
  const bankItems = banks.map(
    bank => `
        <li class='bankItems' data-id="${bank.id}">
            <p>${bank.name}</p>
            <div class="bank-btn-wrap">
                <button type="button" class="bank-items-btn">
                    <p>Edit</p>
                    <svg class="bank-icon"  width="23" height="20">
                        <use href="./img/javascript.svg#icon-pencil" width= "23" height="20"></use>
                    </svg>
                </button>
                <button type="button" class="bank-items-btn">
                    <p>Delete</p>
                    <svg class="bank-icon"  width="24" height="20">
                        <use href="./img/javascript.svg#icon-bin2" width="24" height="22"></use>
                    </svg>
                </button>
            </div>
        </li>`
  );

  // console.log(bankItems);

  bankList.insertAdjacentHTML('beforeend', bankItems.join(' '));
  renderNewBankButton();

  // document.querySelectorAll('.bankItems').forEach(element => {
  //     // console.log(element);
  //     element.addEventListener('click', () => {
  //         // console.dir(element.firstElementChild.textContent);
  //         console.log(findBankByName(element.firstElementChild.textContent, banks));
  //     })
  // });
}

bankList.addEventListener('click', e => {
  if (e.target.nodeName === 'UL') return;
  const id = e.target.closest('.bankItems').dataset.id;
  renderBankInfo(findBankById(id, banks));
});
 
function renderBankInfo(bank) {
    const markup = bankInformation(bank)
    const itemBankContainer = document.querySelector('.itemBankContainer')
    itemBankContainer.innerHTML = markup;
}


function renderNewBankButton() {
  const addBankBtn = document.createElement('button');

  let svgIcon = `
        <svg class="bank-icon"  width="24" height="24">
            <use href="./img/javascript.svg#icon-library" width="24" height="24"></use>
        </svg>`;

  addBankBtn.insertAdjacentHTML('afterbegin', '<p>Add bank</p>');
  addBankBtn.setAttribute('class', 'bank-items-btn');
  addBankBtn.setAttribute('type', 'button');

  addBankBtn.insertAdjacentHTML('beforeend', svgIcon);

  // addBankSvg.appendChild(addBankUse);
  // addBankBtn.appendChild(addBankSvg);
  banksListContainerEl.append(addBankBtn);
}

renderBankList(banks);

// При клікові на кожну з назв банку в лівому блоці  - спочатку в консоль вивести назву вибраного банка в текстовому форматі.
// Якщо все ок - вивести в консоль уже сам об'єкт вибраного банку.




// M5 Додати слухачі на кнопки Edit та Delete і вивести в консоль назву кнопки по якій клікаэмо. Наприклад, "Edit", "Delete"

const buttons = document.querySelectorAll('.bank-items-btn');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log(event.target.textContent);
  });
});




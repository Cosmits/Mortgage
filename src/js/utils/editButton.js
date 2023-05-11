import { banks } from './../models/banks';
import { refs } from './../models/refs';
import { findBankById } from './findBankById';
import renderBankList from './renderBankList';
import renderBankInfo from './renderBankInfo';

let bank = {};
let id = '';
function editButton(event) {
  id = event.target.closest('.bankItems').dataset.id;
  bank = findBankById(id, banks);
  if (
    event.target.closest('.bank-items-btn') !== null &&
    event.target.closest('.bank-items-btn').innerText === 'Edit'
  ) {
    bankInfoListener();
  }
}

function renderButtons(elem) {
  elem.insertAdjacentHTML('beforeend', createButton('save', 'SAVE'));
  elem.insertAdjacentHTML('beforeend', createButton('exit', 'EXIT'));
}

function renderChangeButton() {
  const arrayOfBankInfoText = document.querySelectorAll('.bank-info-tex');
  const keysForId = Object.keys(bank).slice(1);
  arrayOfBankInfoText.forEach((el, i) =>
    el.insertAdjacentHTML('beforeend', createButton(keysForId[i], 'Change'))
  );
}

function createButton(id, name) {
  return `<button type="button" class="changeBtn" id="${id}">${name}</button>`;
}

function bankInfoListener() {
  const bankInfo = document.querySelector('.bank-info');
  renderChangeButton();
  renderButtons(bankInfo);
  bankInfo.addEventListener('click', changeBankInfo);
}

function changeBankInfo(event) {
  const buttonLink = event.target.closest('.changeBtn');
  if (
    buttonLink !== null &&
    event.target.innerText !== 'SAVE' &&
    event.target.innerText !== 'EXIT'
  ) {
    const keyFromId = buttonLink.getAttribute('id');
    let newData = prompt('Введіть нове значення');
    if (newData === null) {
      return;
    }
    if (keyFromId !== 'name') {
      newData = Number(newData);
    }
    bank[keyFromId] = newData;
    renderBankInfo(bank, refs);
    bankInfoListener();
  } else if (event.target.innerText === 'SAVE') {
    banks.splice(banks.indexOf(bank), 1, bank);
    refs.bankList.textContent = '';
    refs.itemBankContainerEl.textContent = '';
    renderBankList(banks, refs);
  } else if (event.target.innerText === 'EXIT') {
    renderBankInfo(bank, refs);
  }
}

export { editButton };
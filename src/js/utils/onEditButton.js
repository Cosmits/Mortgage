import { banks } from '../models/banks';
import { refs } from '../models/refs';

import { findBankById } from './findBankById';
import renderBankList from '../markups/renderBankList';
import renderBankInfo from './renderBankInfo';
import { setLocalStorage } from './localStorage';

let bank = {};
let id = '';

function onEditButton(event) {
  if (
    event.target.closest('.bank-items-btn') !== null &&
    event.target.closest('.bank-items-btn').innerText === 'Edit'
  ) {
    id = event.target.closest('.bankItems').dataset.id;
    bank = { ...findBankById(id, banks) };
    bankInfoListener();
  }
}

function renderButtons(elem) {
  elem.insertAdjacentHTML('beforeend', createButton('save', 'SAVE'));
  elem.insertAdjacentHTML('beforeend', createButton('exit', 'EXIT'));
}

function renderChangeButton() {
  const arrayOfBankInfoText = document.querySelectorAll('.bank-info-text');
  const keysForId = Object.keys(bank).slice(1);
  arrayOfBankInfoText.forEach((el, i) =>
    el.insertAdjacentHTML('beforeend', createButton(keysForId[i], 'Change'))
  );
}

function createButton(id, name) {
  return `<button type="button" class="changeBtn " id="${id}">${name}</button>`;
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
    
    if (newData === null || newData === '') return; 
    if (keyFromId !== 'name') newData = Number(newData);

    bank[keyFromId] = newData;
    renderBankInfo(bank, refs);
    bankInfoListener();

  } else if (event.target.innerText === 'SAVE') {
    
    banks.splice(banks.indexOf(findBankById(id, banks)), 1, bank);
    refs.bankList.innerHTML = '';
    refs.itemBankContainerEl.innerHTML = '';
    renderBankList(banks, refs);
    setLocalStorage('Banks', banks);

  } else if (event.target.innerText === 'EXIT') {
    bank = { ...findBankById(id, banks) };
    renderBankInfo(bank, refs);
  }
  return;
}

export { onEditButton };

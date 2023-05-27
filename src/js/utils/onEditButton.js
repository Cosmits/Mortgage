import { banks } from '../models/banks';
import { refs } from '../models/refs';

import { findBankById } from './findBankById';
import renderBankList from '../markups/renderBankList';
import renderBankInfo from './renderBankInfo';
import { setLocalStorage } from './localStorage';

let bank = {};
let id = '';
let newData = '';
let keyFromId = '';

function onEditButton(event) {
  if (
    event.target.closest('.bank-items-btn') !== null &&
    event.target.closest('.bank-items-btn').innerText === 'Edit'
  ) {
    removeModal();
    id = event.target.closest('.bankItems').dataset.id;
    bank = { ...findBankById(id, banks) };
    bankInfoListener();
    renderChangeModal();
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

    // validation form
    keyFromId = buttonLink.getAttribute('id');
    refs.changeModalInput = document.querySelector('.change-modal-input');
    refs.changeModalText = document.querySelector('.change-modal-text');


    switch (keyFromId) {
      case 'name':
        refs.changeModalText.innerText = `Enter bank's name:`
        refs.changeModalInput.type = 'text';
        refs.changeModalInput.minlength = 3;
        refs.changeModalInput.placeholder = 'Bank name';
        break;

      case 'interestRate':
        refs.changeModalText.innerText = `Enter interest rate:`
        refs.changeModalInput.type = 'number';
        refs.changeModalInput.min = 5;
        refs.changeModalInput.max = 50;
        refs.changeModalInput.placeholder = '5...50';
        break;

      case 'maxLoan':
        refs.changeModalText.innerText = `Enter max loan:`
        refs.changeModalInput.type = 'number';
        refs.changeModalInput.min = "5000";
        refs.changeModalInput.max = "450000";
        refs.changeModalInput.placeholder = '5000...450000';
        break;

      case 'minPayment':
        refs.changeModalText.innerText = `Enter min payment:`
        refs.changeModalInput.type = 'number';
        refs.changeModalInput.min = "500";
        refs.changeModalInput.max = "50000";
        refs.changeModalInput.placeholder = '500...50000';
        break;

      case 'loanTerm':
        refs.changeModalText.innerText = `Enter loan term:`
        refs.changeModalInput.type = 'number';
        refs.changeModalInput.min = "3";
        refs.changeModalInput.max = "60";
        refs.changeModalInput.placeholder = '6...60';
        break;

      default:
        refs.changeModalInput.type = 'text';
        break;
    }

    unhiddenChangeModal();

    //ESCAP
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        document.querySelector('.backdrop').classList.add('is-hidden');
        document.querySelector('.change-modal-form').reset();
      }
      return;
    });

    // button X
    const modalClose = document.querySelector('.modal-close');
    modalClose.addEventListener('click', event => {
      event.preventDefault();
      document.querySelector('.backdrop').classList.add('is-hidden');
      document.querySelector('.change-modal-form').reset();
    })

  } else if (event.target.innerText === 'SAVE') {
    banks.splice(banks.indexOf(findBankById(id, banks)), 1, bank);
    refs.bankList.innerHTML = '';
    refs.itemBankContainerEl.innerHTML = '';
    renderBankList(banks, refs);
    setLocalStorage('Banks', banks);
    removeModal();
  } else if (event.target.innerText === 'EXIT') {
    bank = { ...findBankById(id, banks) };
    renderBankInfo(bank, refs);
    removeModal();
  }
}

function changeBankInformation() {
  if (newData === null || newData === '' || newData === undefined) return;
  if (keyFromId !== 'name') newData = Number(newData);

  bank[keyFromId] = newData;
  renderBankInfo(bank, refs);
  bankInfoListener();
}

function removeModal() {
  const backdrop = document.querySelector('.backdrop');
  if (backdrop !== null) {
    backdrop.remove();
  }
  return;
}

function unhiddenChangeModal() {
  document.querySelector('.backdrop').classList.remove('is-hidden');
}

function renderChangeModal() {
  document.body.insertAdjacentHTML('beforeend', changeModalMarkup());
  document.querySelector('.backdrop').addEventListener('submit', hiddenChangeModal);

  document.querySelector('.change-modal-input').addEventListener('blur', event => {
    newData = event.target.value;
  });

  document.querySelector('.change-modal-form').lastElementChild.addEventListener('click', event => {
    newData = document.querySelector('.change-modal-input').value;
    changeBankInformation();
  });
}

function changeModalMarkup() {
  return `
  <div class="backdrop is-hidden">
    <div class="change-modal">
      <button type="button" class="modal-close">
        <svg class="modal-button" width="8" height="8">
          <use href="./img/javascript.svg#icon-cross"></use>
        </svg>
      </button>
      <form class="change-modal-form">
        <label for="name"
          ><span class="change-modal-text">Enter new data:</span>
        </label>
        <input class="change-modal-input" type="text" name="name" id="name" required />
        <button class="change-modal-ok" type="submit">OK</button>
      </form>
    </div>
  </div>`;
}

function hiddenChangeModal(event) {

  event.preventDefault();

  const backdrop = document.querySelector('.backdrop');
  const modalClose = document.querySelector('.modal-close');
  const okBtn = document.querySelector('.change-modal-form');
  if (
    event.target === backdrop ||
    event.target === modalClose ||
    event.target === okBtn
  ) {
    backdrop.classList.add('is-hidden');
    document.querySelector('.change-modal-form').reset();
  }
}

export { onEditButton };

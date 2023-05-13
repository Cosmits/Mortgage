//libraries
import debounce from 'lodash.debounce';

import renderBankList from './markups/renderBankList';
import renderInputFindBank from './markups/renderInputFindBank';
import renderAddBankButton from './markups/renderAddBankButton';
import renderClearBankButton from './markups/renderClearBankBtn';
import renderAddBankForms from './markups/renderAddBankForms';

import onAddBankClick from './listeners/onAddBankClick';
import onClearButtonClick from './listeners/onClearBtnClick';
import onClickBankUL from './listeners/onClickBankUL';
import onSearchBankByName from './listeners/onSearchBankByName';

import { onEditButton } from './utils/onEditButton';
import { onDeleteButton } from './utils/onDeleteButton';
import getClearBankList from './utils/getClearBankList';
import { setLocalStorage, getLocalStorage } from './utils/localStorage';

//modals elements
import {
  onCloseModalClick,
  press_ESC_for_Close_modalForm,
  OnClick_overlay_for_Close_modalForm
} from './listeners/onCloseModalClick';
import onSubmitModalForm from './listeners/onSubmitModalForm';

// data models
import { banks } from './models/banks';
import { refs } from './models/refs';

const promise = new Promise((resolve, reject) => {
  //LocalStorage
  const banksFromLocalStorage = getLocalStorage('Banks')
  if (!banksFromLocalStorage) setLocalStorage('Banks', banks)
  resolve(true);
});

promise
  .then(value => {
  
    // додаєм класи на головні контейнери
    refs.banksListContainerEl.classList.add('banksListContainer');
    refs.itemBankContainerEl.classList.add('itemBankContainer');
    refs.bankList.classList.add('bankList');
    refs.bottomContainerBtn.classList.add('bank-btn-wrap');

    // додаєм розмітку в HTML
    refs.divRoot.append(
      refs.banksListContainerEl,
      refs.itemBankContainerEl,
      refs.modalForm);

    refs.banksListContainerEl.append(refs.bankList, refs.bottomContainerBtn);

    renderInputFindBank(banks, refs);
    renderBankList(banks, refs);
    renderAddBankButton(refs);
    renderClearBankButton(refs);
    getClearBankList(refs);
    renderAddBankForms(refs);

    // обробка clicks та inputs
    refs.inputForFindBank.addEventListener('input', debounce(onSearchBankByName, 500));

    refs.bankList.addEventListener('click', onClickBankUL);
    refs.bankList.addEventListener('click', onEditButton);
    refs.bankList.addEventListener('click', onDeleteButton);

    refs.addBankBtn.addEventListener('click', onAddBankClick);
    refs.clearBankBtn.addEventListener('click', onClearButtonClick);

    // Modal btn
    const js_close_modal = document.querySelector('.js-close-modal')
    js_close_modal.addEventListener('click', onCloseModalClick);
    // Modal FORM
    const modalForm = document.querySelector(".form");
    modalForm.addEventListener("submit", onSubmitModalForm);

    // press ESC  for Close modalForm
    press_ESC_for_Close_modalForm();

    // Click on overlay for Close modalForm
    const overlay = document.querySelector(".overlay");
    overlay.addEventListener('click', OnClick_overlay_for_Close_modalForm);
  })
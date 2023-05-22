import { banks } from '../models/banks';
import { refs } from '../models/refs';

import { findBankById } from '../utils/findBankById';
import renderBankInfo from '../utils/renderBankInfo';

function onClickBankUL(e) {
  if (e.target.nodeName === 'UL') return;
  const bankItem = e.target.closest('.bankItems');
  if (!bankItem) return;

  const id = bankItem.dataset.id;
  selectBank(bankItem);
  renderBankInfo(findBankById(id, banks), refs);
}



function selectBank(element) {
  const banks = document.querySelectorAll('.bankItems');
  banks.forEach(bank => {
    bank.classList.remove('selected-bank');
  });
  element.classList.add('selected-bank');
}

export default onClickBankUL;

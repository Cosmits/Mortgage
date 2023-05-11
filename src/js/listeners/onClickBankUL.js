import { banks } from '../models/banks';
import { refs } from '../models/refs';

import { findBankById } from '../utils/findBankById';
import renderBankInfo from '../utils/renderBankInfo';

function onClickBankUL(e) {
  if (e.target.nodeName === 'UL') return;

  const buttonName = e.target.textContent.toLowerCase();
  if (buttonName.includes('edit')) {
    //add code to edit
    console.log(buttonName);
  }

  if (buttonName.includes('delete')) {
    //add code to delete
    console.log(buttonName);
  }

  const id = e.target.closest('.bankItems').dataset.id;
  renderBankInfo(findBankById(id, banks), refs);
}

export default onClickBankUL;

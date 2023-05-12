import { banks } from '../models/banks';
import { refs } from '../models/refs';

import { findIndexBank } from './findBankById';
import renderBankList from '../markups/renderBankList';

import { setLocalStorage } from './localStorage';
import renderInputFindBank from '../markups/renderInputFindBank';

function onDeleteButton(event) {
  
  
  if (
    event.target.closest('.bank-items-btn') !== null &&
    event.target.closest('.bank-items-btn').innerText === 'Delete'
  ) {

    const id = event.target.closest('.bankItems').dataset.id;  
    const index = findIndexBank(id, banks);
    console.log(index);
  
    banks.splice(index, 1);

    refs.itemBankContainerEl.innerHTML = '';
    setLocalStorage('Banks', banks);

    renderInputFindBank(banks, refs);
    renderBankList(banks, refs);
  }
}

export { onDeleteButton };
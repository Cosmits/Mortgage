import { refs } from '../models/refs';
import { banks } from '../models/banks';


import { setLocalStorage, getLocalStorage } from '../utils/localStorage';
import renderInputFindBank from '../markups/renderInputFindBank';

function onClearButtonClick() {

  refs.bankList.innerHTML = '';
  refs.itemBankContainerEl.innerHTML = '';
  refs.clearBankBtn.classList.add('hidden');
  banks.splice(0, banks.length);

  setLocalStorage('Banks', banks);

  renderInputFindBank(banks, refs);

}

export default onClearButtonClick
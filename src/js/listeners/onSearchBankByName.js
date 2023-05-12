import { banks } from '../models/banks';
import { refs } from '../models/refs';

import { findBankByName } from '../utils/findBankById';
import renderBankList from '../markups/renderBankList';


function onSearchBankByName(event) {

  let arr = [];
  const str = event.target.value.trim();
  const strLength = str.length;

  if (strLength > 2) {
    arr = findBankByName(str, banks);
  } else {
    arr = banks;
  }

  refs.bankList.innerHTML = '';
  renderBankList(arr, refs);

}

export default onSearchBankByName;
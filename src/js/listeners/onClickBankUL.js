import { banks } from '../models/banks';
import { refs } from '../models/refs';

import { findBankById } from '../utils/findBankById';
import renderBankInfo from '../utils/renderBankInfo';

function onClickBankUL(e) {
  if (e.target.nodeName === 'UL') return;
  const id = e.target.closest('.bankItems').dataset.id;
  renderBankInfo(findBankById(id, banks), refs);
}

export default onClickBankUL;
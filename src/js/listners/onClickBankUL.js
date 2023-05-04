import { refs } from '../models/refs';
import { banks } from '../models/banks';
import { findBankById } from '../utils/findBankById';
import bankInformation from '../utils/bankInfoMarkup';

function renderBankInfo(bank) {
  const markup = bankInformation(bank);
  refs.itemBankContainerEl.innerHTML = markup;
}


function onClickBankUL(e) {
  if (e.target.nodeName === 'UL') return;
  const id = e.target.closest('.bankItems').dataset.id;
  renderBankInfo(findBankById(id, banks));
}

export default onClickBankUL;
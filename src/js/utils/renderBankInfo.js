import bankInfoMarkup from '../markups/bankInfoMarkup';

function renderBankInfo(bank, refs) {
  const markup = bankInfoMarkup(bank);
  refs.itemBankContainerEl.innerHTML = markup;
}

export default renderBankInfo;
import bankInformation from './bankInfoMarkup';

function renderBankInfo(bank, refs) {
  const markup = bankInformation(bank);
  refs.itemBankContainerEl.innerHTML = markup;
}

export default renderBankInfo;
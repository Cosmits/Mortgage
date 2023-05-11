import debounce from 'lodash.debounce';

import renderBankList from './utils/renderBankList';
import renderInputFindBank from './utils/renderInputFindBank';
import renderNewBankButton from './utils/renderNewBankButton'
import renderClearBankButton from './utils/renderClearBankBtn';
import getClearBankList from './utils/getClearBankList';
import onClearButtonClick from './utils/onClearBtnClick';
import onClickBankUL from './listeners/onClickBankUL'
import onSearchBankByName from './listeners/onSearchBankByName';
import { editButton } from './utils/editButton';

// data models
import { banks } from './models/banks';
import { refs } from './models/refs';

// додаєм класи на головні контейнери
refs.banksListContainerEl.classList.add('banksListContainer');
refs.itemBankContainerEl.classList.add('itemBankContainer');
refs.bankList.classList.add('bankList');

// додаєм розмітку в HTML
refs.divRoot.append(refs.banksListContainerEl, refs.itemBankContainerEl);
refs.banksListContainerEl.append(refs.bankList);

renderBankList(banks, refs);
renderNewBankButton(refs);

renderInputFindBank(banks, refs);

renderClearBankButton(refs)

getClearBankList( refs)

// обробка clicks та inputs
refs.bankList.addEventListener('click', onClickBankUL);
refs.inputForFindBank.addEventListener(
  'input',
  debounce(onSearchBankByName, 500)
);

refs.bankList.addEventListener('click', editButton);

refs.clearBankBtn.addEventListener('click', () => {
    onClearButtonClick(refs);
  });
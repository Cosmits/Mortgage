import debounce from 'lodash.debounce';

import renderBankList from './markups/renderBankList';
import renderInputFindBank from './markups/renderInputFindBank';
import renderAddBankButton from './markups/renderAddBankButton';
import renderClearBankButton from './markups/renderClearBankBtn';
import getClearBankList from './utils/getClearBankList';
import onClearButtonClick from './listeners/onClearBtnClick';
import onClickBankUL from './listeners/onClickBankUL';
import onSearchBankByName from './listeners/onSearchBankByName';
import { onEditButton } from './utils/onEditButton';
import { onDeleteButton } from './utils/onDeleteButton';


// data models
import { banks } from './models/banks';
import { refs } from './models/refs';

import { setLocalStorage, getLocalStorage } from './utils/localStorage';

// додаєм класи на головні контейнери
refs.banksListContainerEl.classList.add('banksListContainer');
refs.itemBankContainerEl.classList.add('itemBankContainer');
refs.bankList.classList.add('bankList');
refs.bottomContainerBtn.classList.add('bank-btn-wrap');

// додаєм розмітку в HTML
refs.divRoot.append(refs.banksListContainerEl, refs.itemBankContainerEl);
refs.banksListContainerEl.append(refs.bankList, refs.bottomContainerBtn);

const banksFromLocalStorage = getLocalStorage('Banks')
if (!banksFromLocalStorage) setLocalStorage('Banks', banks)

renderInputFindBank(banks, refs);
renderBankList(banks, refs);
renderAddBankButton(refs);

renderClearBankButton(refs);
getClearBankList(refs);

// обробка clicks та inputs
refs.inputForFindBank.addEventListener('input', debounce(onSearchBankByName, 500));

refs.bankList.addEventListener('click', onClickBankUL);
refs.bankList.addEventListener('click', onEditButton);
refs.bankList.addEventListener('click', onDeleteButton);

refs.clearBankBtn.addEventListener('click', onClearButtonClick);

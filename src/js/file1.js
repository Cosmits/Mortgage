import renderBankList from './utils/renderBankList';
import onClickBankUL  from './listners/onClickBankUL'

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

// обробка кліків
refs.bankList.addEventListener('click', onClickBankUL);

renderBankList(banks, refs);
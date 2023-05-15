function renderBankList(banks, refs) {
  const bankItems = banks.map(
    bank => `
        <li class='bankItems' data-id="${bank.id}">
          <p>${bank.name}</p>
          <div class="bank-btn-wrap">
            <button type="button" class="bank-items-btn">
              <p>Edit</p>
              <svg class="bank-icon"  width="21" height="20">
                <use href="./img/javascript.svg#icon-pencil" width= "21" height="20"></use>
              </svg>
            </button>
            <button type="button" class="bank-items-btn">
              <p>Delete</p>
              <svg class="bank-icon"  width="23" height="20">
                <use href="./img/javascript.svg#icon-bin2" width="23" height="20"></use>
              </svg>
            </button>
          </div>
        </li>`
  );

  // refs.bankList.insertAdjacentHTML('beforeend', bankItems.join(' '));
  refs.bankList.innerHTML = bankItems.join(' ');

}

export default renderBankList;

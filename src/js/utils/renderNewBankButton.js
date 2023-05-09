function renderNewBankButton(refs) {

  let svgIcon = `
    <svg class="bank-icon"  width="24" height="24">
      <use href="./img/javascript.svg#icon-library" width="24" height="24"></use>
    </svg>`;

  refs.addBankBtn.insertAdjacentHTML('afterbegin', '<p>Add bank</p>');
  refs.addBankBtn.setAttribute('class', 'bank-items-btn');
  refs.addBankBtn.setAttribute('type', 'button');

  refs.addBankBtn.insertAdjacentHTML('beforeend', svgIcon);

  refs.banksListContainerEl.append(refs.addBankBtn);
}

export default renderNewBankButton;
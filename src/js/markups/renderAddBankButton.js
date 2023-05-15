function renderAddBankButton(refs) {

  let svgIcon = `
    <svg class="bank-icon"  width="23" height="22">
      <use href="./img/javascript.svg#icon-library" width="23" height="22"></use>
    </svg>`;

  refs.addBankBtn.insertAdjacentHTML('afterbegin', '<p>Add bank</p>');
  refs.addBankBtn.setAttribute('class', 'bank-items-btn');
  refs.addBankBtn.classList.add('class', 'add-btn-shadow');
  refs.addBankBtn.setAttribute('type', 'button');

  refs.addBankBtn.insertAdjacentHTML('beforeend', svgIcon);

  refs.bottomContainerBtn.append(refs.addBankBtn);
}

export default renderAddBankButton;



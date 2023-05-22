function renderClearBankButton(refs) {
  let svgIcon = `
    <svg class="bank-icon"  width="20" height="18">
      <use href="./img/javascript.svg#icon-bin2" width="20" height="18"></use>
    </svg>`;

  refs.clearBankBtn.insertAdjacentHTML('beforeend', svgIcon);

  // refs.clearBankBtn.textContent = 'Clear'
  refs.clearBankBtn.insertAdjacentHTML('afterbegin', '<p>Clear</p>');
  refs.clearBankBtn.classList.add('bank-items-btn', 'add-btn-shadow');
  refs.clearBankBtn.classList.add('hidden');
  refs.clearBankBtn.setAttribute('type', 'button');
  refs.bottomContainerBtn.append(refs.clearBankBtn);
}

export default renderClearBankButton;
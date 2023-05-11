function renderClearBankButton(refs) {
    refs.clearBankBtn.textContent = 'Clear'
    refs.clearBankBtn.classList.add('bank-items');
    refs.clearBankBtn.classList.add('hidden');
    refs.banksListContainerEl.append(refs.clearBankBtn);
 }
 
 export default renderClearBankButton;
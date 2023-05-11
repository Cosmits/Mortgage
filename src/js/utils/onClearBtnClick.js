function onClearButtonClick(refs) {
    const bankList = refs.bankList;
    bankList.innerHTML = '';
    refs.clearBankBtn.classList.add('hidden');
}
export default onClearButtonClick
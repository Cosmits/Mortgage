function getClearBankList(refs) {

    if (refs.bankList.children.length > 3) {
        refs.clearBankBtn.classList.remove('hidden');
    } else {
        refs.clearBankBtn.classList.add('hidden');
    }
}

export default getClearBankList



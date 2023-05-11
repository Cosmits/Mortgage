function getClearBankList(refs) {
    const bankLists = refs.bankList
    if (bankLists.children.length > 3) {
        refs.clearBankBtn.classList.remove('hidden');
    } else {
        refs.clearBankBtn.classList.add('hidden');
    }
}

export default getClearBankList



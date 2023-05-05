function renderInputFindBank(banks, refs) {
  if (banks.length > 5) {
    refs.divRoot.before(refs.inputForFindBank);
    refs.inputForFindBank.type = "text";
    refs.inputForFindBank.name = "findBank";
    refs.inputForFindBank.placeholder = "Enter bank name for search ..";
    refs.inputForFindBank.classList.add('js-inputForFindBank','bankItems');
  }
}

export default renderInputFindBank;
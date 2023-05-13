import { refs } from '../models/refs';
import { banks } from '../models/banks';

import { setLocalStorage } from '../utils/localStorage';

function onSubmitModalForm(event) {

  //event.preventDefault();

  const { elements: { bankName, interestRate, maxLoan, minPayment, loanTerm } } = event.target;

  const newBank = {
    id: String(Date.now()),
    name: bankName.value.trim(),
    interestRate: Number(interestRate.value),
    maxLoan: Number(maxLoan.value),
    minPayment: Number(minPayment.value),
    loanTerm: Number(loanTerm.value),
  }

  banks.splice(banks.length, 0, newBank);
  
  setLocalStorage('Banks', banks);

}

export default onSubmitModalForm;
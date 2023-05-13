function bankInfoMarkup(bank) {
  return `
    <div class="bank-info">
        <p class="bank-info-tex">Bank name: ${bank.name}</p>
        <p class="bank-info-tex">Interest rate: ${bank.interestRate} %</p>
        <p class="bank-info-tex">Max loan: ${bank.maxLoan} uah</p>
        <p class="bank-info-tex">Min payment: ${bank.minPayment} uah </p>
        <p class="bank-info-tex">Loan-term: ${bank.loanTerm} month</p>
      </div>
    `;
}
export default bankInfoMarkup;
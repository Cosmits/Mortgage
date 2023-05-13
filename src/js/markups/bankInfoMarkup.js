function bankInfoMarkup(bank) {
  return `
    <div class="bank-info">
        <p class="bank-info-text">Bank name: ${bank.name}</p>
        <p class="bank-info-text">Interest rate: ${bank.interestRate} %</p>
        <p class="bank-info-text">Max loan: ${bank.maxLoan} uah</p>
        <p class="bank-info-text">Min payment: ${bank.minPayment} uah </p>
        <p class="bank-info-text">Loan-term: ${bank.loanTerm} month</p>
      </div>
    `;
}
export default bankInfoMarkup;
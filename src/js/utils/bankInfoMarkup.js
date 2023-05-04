function bankInfoMarkup(bank) {
  return `
    <div class="bank-info">
        <p class="bank-info-tex">name: ${bank.name}</p>
        <p class="bank-info-tex">interest rate: ${bank.interestRate} %</p>
        <p class="bank-info-tex">max loan: ${bank.maxLoan} uah</p>
        <p class="bank-info-tex">min payment: ${bank.minPayment
    } uah </p>
        <p class="bank-info-tex">loan-term: ${bank.loanTerm} month</p>
      </div>
    `
}
export default bankInfoMarkup;

export const findBankById = (id, banks) => {
    return banks.find(bank => bank.id === id)
}

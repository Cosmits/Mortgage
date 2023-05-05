
export const findBankById = (id, banks) => {
  return banks.find(bank => bank.id === id)
}

export const findBankByName = (name, banks) => { 
  return banks.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
}
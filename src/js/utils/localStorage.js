function setLocalStorage(banks) {
  localStorage.setItem('Banks', JSON.stringify(banks));
}

function getLocalStorage() {
  const arrFromLocal = JSON.parse(localStorage.getItem('Banks'));
  if (arrFromLocal !== null) {
    banks.splice(0, banks.length);
    arrFromLocal.forEach(element => {
      banks.push(element);
    });
  }
  return;
}

export { setLocalStorage, getLocalStorage };

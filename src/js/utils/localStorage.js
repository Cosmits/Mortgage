function setLocalStorage(banks) {
  localStorage.setItem('Banks', JSON.stringify(banks));
}

function getLocalStorage() {

  const arrFromLocal = null;

  try {
    arrFromLocal = JSON.parse(localStorage.getItem('Banks'));
  } catch (error) {
    console.error("Set state error: ", error.message);
    return;
  }

  if (arrFromLocal !== null) {
    banks.splice(0, banks.length);
    arrFromLocal.forEach(element => {
      banks.push(element);
    });
  }
  return;
}

export { setLocalStorage, getLocalStorage };

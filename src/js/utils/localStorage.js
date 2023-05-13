import { banks } from '../models/banks';

const setLocalStorage = (key, value) => {

  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const getLocalStorage = key => {
  
  try {
    const serializedState = JSON.parse(localStorage.getItem(key));

    if (serializedState !== null) {
      banks.splice(0, banks.length);
      if (!!serializedState.length) {
        serializedState.forEach(element => banks.push(element));
      }
    }
    return serializedState;

  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

export { setLocalStorage, getLocalStorage };

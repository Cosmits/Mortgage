function onAddBankClick(event) {

  event.preventDefault();

  const modal = document.querySelector(".js-modal");
  modal.classList.add("is-show");
  const modal_overlay = document.querySelector(".js-modal-overlay")
  modal_overlay.classList.add("is-show");
}

export default onAddBankClick
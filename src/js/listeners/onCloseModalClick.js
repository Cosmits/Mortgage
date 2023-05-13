export function onCloseModalClick(event) {

  event.preventDefault();

  const modal = document.querySelector(".js-modal");
  modal.classList.remove("is-show");
  const modal_overlay = document.querySelector(".js-modal-overlay")
  modal_overlay.classList.remove("is-show");
}

export function press_ESC_for_Close_modalForm() {

  document.body.addEventListener('keyup', function (e) {
    if (e.keyCode == 27) {
      document.querySelector('.js-modal').classList.remove('is-show');
      document.querySelector('.js-modal-overlay').classList.remove('is-show');
    };
  }, false);
}

export function OnClick_overlay_for_Close_modalForm() { 
  document.querySelector('.js-modal').classList.remove('is-show');
  this.classList.remove('is-show');
}
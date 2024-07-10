const buttonOpenModal = document.getElementById("openModal")

const modalWrapper = document.querySelector(".modal")

buttonOpenModal.onclick = function() {
  modalWrapper
    .classList
    .remove('invisible')
}

document.addEventListener('keydown', (event) => {
  const isEscape = event.key === "Escape"

  if (isEscape) {
    modalWrapper
    .classList
    .add('invisible')
  }
})

modalWrapper.onclick = (event) => {
  const target = event.target
  const valueId = target.getAttribute('id')
  
  if (valueId === "wrapper") {
    modalWrapper
    .classList
    .add('invisible')
  }
}

const modalBtn = document.querySelector(".modal-btn")
const backdrop = document.querySelector(".backdrop")
const modal = document.querySelector(".modal")
const modalBtns = document.querySelectorAll(".btn")

function openModal() {
    backdrop.classList.remove("hidden")
    modal.classList.remove("hidden")
}

function closeModal() {
    backdrop.classList.add("hidden")
    modal.classList.add("hidden")
}


modalBtn.addEventListener("click" , openModal)
backdrop.addEventListener("click" , closeModal)

modalBtns.forEach((btn) => {
    btn.addEventListener("click" , closeModal)
})
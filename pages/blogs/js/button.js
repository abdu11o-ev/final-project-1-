const tabButton = document.querySelector('.btn-1')
const show = document.querySelector('#row2')

tabButton.addEventListener("click", closeShow)

function closeShow() {
    show.classList.toggle('d-none')
}

console.log(tabButton, show);
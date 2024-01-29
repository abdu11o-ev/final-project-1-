const gallery = document.querySelectorAll('.image-gallirey')
const gallirey_filters = document.getElementById('gallirey_filters')
// gallirey_filters.addEventListener('change', () => {
//     console.log(this.value);
// })

function onChangeGallirey() {
    let value = gallirey_filters.value;
    if (value == 'all') {
        gallery.forEach((element) => {
            element.style.visibilyty = 'hidden'
        });
    }
    else {
        gallery.forEach((element) => {
            
            if (element.getAttribute('data-tag') == value) {
                element.classList.add('d-block')
            } else {

                element.classList.remove('d-block')
                element.classList.toggle('d-none')
            }
        });
    }
    console.log(value);
}
gallirey_filters.onchange = onChangeGallirey;
console.log(gallery);
const tabsButtons = document.querySelectorAll('.tabs__button');

tabsButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {

    const prevActiveItem = document.querySelector('.tabs__item._active');
    const prevActiveButton = document.querySelector('.tabs__button._active');
    
    if (prevActiveButton) {
      prevActiveButton.classList.remove('_active');
      prevActiveButton.classList.remove('btn-dark')
      prevActiveButton.classList.add('btn-outline-dark')
    }
    
    if (prevActiveItem) {
      prevActiveItem.classList.remove('_active');
    }
    const nextActiveItemId = `${e.srcElement.getAttribute('data-tab')}`;
    const nextActiveItem = document.getElementById(nextActiveItemId);

    btn.classList.add('_active');
    btn.classList.add('btn-dark')
    nextActiveItem.classList.add('_active');
  });
})



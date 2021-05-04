const btnMenu = document.querySelector('#btnMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnMenu.addEventListener('click', () => {
    console.log('menu button clicked')

    if (header.classList.contains('open')) {
        header.classList.remove('open');
        btnMenu.style.opacity = '1';
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } else {
        header.classList.add('open');
        btnMenu.style.opacity = '0';
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
})
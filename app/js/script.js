// For mobile menu
const btnMenu = document.querySelector('#btnMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

// For tabs
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => tabContent.classList.remove('active'));
    tabs.forEach((tab) => tab.classList.remove('active'));
    tab.classList.add('active');
    target.classList.add('active');
  });
});

// Mobile menu
btnMenu.addEventListener('click', () => {
  console.log('menu button clicked');

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
});

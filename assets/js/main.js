const navMenu = document.querySelector('.hamburger'),
      mobileMenu = document.querySelector('#mobile-menu'),
      nav = document.querySelector('#nav');


navMenu.addEventListener('click', function() {
  this.classList.toggle('oppen');
  mobileMenu.classList.toggle('translate-x-full');
} );
const navMenu = document.querySelector('.hamburger'),
      mobileMenu = document.querySelector('#mobile-menu'),
      nav = document.querySelector('#nav'),
      navItem = document.querySelectorAll('#nav ul li');


navItem.forEach((li)=>{
  li.addEventListener('click',()=>{
    navItem.forEach((e)=>e.classList.remove('active-nav'))
    li.classList.add('active-nav')
  })
})

navMenu.addEventListener('click', function() {
  this.classList.toggle('oppen');
  mobileMenu.classList.toggle('translate-x-full');
} );


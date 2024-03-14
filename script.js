let menuBtn = document.querySelector('.menu_btn');
let menu = document.querySelector ('.header_menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('_active');
    menu.classList.toggle('_active');
});
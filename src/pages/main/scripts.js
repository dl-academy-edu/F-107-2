// var popupBtn = document.querySelector('.banner-js');
// var popupForm = document.querySelector('.popup-form');
// var popupOverlay = document.querySelector('.popup-overlay');
// var popupClose = document.querySelector('.popup-close');
// var input = popupForm.querySelector('input');

// popupBtn.addEventListener('click', function() {
//     popupForm.classList.add('popup-open');
//     popupOverlay.classList.add('popup-overlay-open');
//     input.focus();
// })

// popupClose.addEventListener('click', function() {
//     popupForm.classList.remove('popup-open');
//     popupOverlay.classList.remove('popup-overlay-open');
// })


// window.addEventListener('keydown', function(evt) {
//     if(evt.keyCode === 27) {
//         if(popupForm.classList.contains('popup-open')) {
//             popupForm.classList.remove('popup-open');
//             popupOverlay.classList.remove('popup-overlay-open');
//         }
//     }
// })

var openBtn = document.querySelector('.header-mobile__btn_js');
var menu = document.querySelector('.header-mobile_js');
var closeClose = document.querySelector('.header-mobile__close_js');

openBtn.addEventListener('click', function() {

    menu.classList.add('header-mobile_open');
})

closeClose.addEventListener('click', function() {
    menu.classList.remove('header-mobile_open');
})
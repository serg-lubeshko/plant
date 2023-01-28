window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})



// window.addEventListener('DOMContentLoaded', () => {
//     const button = document.querySelector('.not-open');
//     const parent = button.parentNode;
//
//     button.addEventListener('click', function() {
//         const classes = parent.classList;
//         classes.toggle('not-open');
//         classes.toggle('open');
// })
// });

const button = document.querySelector('.not-open');
const parent = button.parentNode;

// button.onclick = function () {
//     // body...
//     console.log(parent)
//
//     alert('Hi');
// };

// const button = document.querySelector('button');
// const parent = button.parentNode;
//
button.addEventListener('click', function() {

    const classes = parent.classList;
    console.log(classes)
    classes.toggle('not-open');
    classes.toggle('open');
});
// При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом.
// Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion
// все еще остается открытым. +25
//
// Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup,
// но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее
// автоматически закрывается. +25
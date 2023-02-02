window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".nav-menu"),
        menuItem = document.querySelectorAll(".nav-menu__list-item"),
        hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("nav-menu_active");
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.toggle("hamburger_active");
            menu.classList.toggle("nav-menu_active");
        });
    });
});

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

// const button = document.querySelector('.not-open');
// const parent = button.parentNode;

// button.onclick = function () {
//     // body...
//     console.log(parent)
//
//     alert('Hi');
// };

// const button = document.querySelector('button');
// const parent = button.parentNode;
//
// button.addEventListener('click', function() {
//
//     const classes = parent.classList;
//     console.log(classes)
//     classes.toggle('not-open');
//     classes.toggle('open');
// });
// При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом.
// Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion
// все еще остается открытым. +25
//
// Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup,
// но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее
// автоматически закрывается. +25

// const buttons = document.querySelectorAll('button.prices__item');
//     console.log(buttons)
// // const parent = button.parentNode;

// // button.onclick = function () {
// //     // body...
// //     console.log(parent)
// //
// //     alert('Hi');
// // };

// // const button = document.querySelector('button');
// // const parent = button.parentNode;
// //
// // buttons.addEventListener('click', function() { ....
// buttons.forEach((item) => item.addEventListener('click', function() {
//     console.log(item, 'item')
//     // const classes = parent.classList;
//     const classes = item.parentNode.classList;
//     console.log(classes, 'fdsfsdf')
//     classes.toggle('not-open');
//     classes.toggle('open');
//     buttons[1].toggle('non_active')
//     // buttons[1].disable=true

// }));

const container = document.querySelector(".body__left");
container.addEventListener("click", (e) => {
    if (e.target.closest(".prices__item")) {
        const opened = e.currentTarget.querySelectorAll(".open:not(.child)");
        if (opened.length && !e.target.closest(".open")) {
            opened.forEach((item) => {
                item.classList.toggle("open");
                item.classList.toggle("not-open");
            });
        }
        const classes = e.target.closest(".prices__item").parentNode.classList;
        classes.toggle("not-open");
        classes.toggle("open");
    }
});

const test = [
    {id: 1, city: "Canandaigua, NY", phone: "+1\t585\t393 0001", address: "151 Charlotte Street"},
    {id: 2, city: "New York City", phone: "+1 212 456 0002", address: "9 East 91st Street"},
    {id: 3, city: "Yonkers, NY", phone: "+1\t914\t678 0003", address: "511 Warburton Ave"},
    {id: 4, city: "Sherrill, NY", phone: "+1\t315\t908 0004", address: "14 WEST Noyes BLVD"},
];

const selectValue = document.querySelector(".select_city");

test.forEach((item) => {
    const option = document.createElement("option");
    option.setAttribute("value", item.city);
    option.textContent = item.city;
    selectValue.appendChild(option);
});

selectValue.addEventListener("change", (event) => {
    const cityName = document.querySelector("#City");
    console.log(cityName);
    const phone = document.querySelector("#Phone");
    const address = document.querySelector("#Address");

    //   cityName.textContent = event.target.value;
    cityName.textContent = test.find((item) => item.city === event.target.value)
        ? test.find((item) => item.city === event.target.value).city
        : event.target.value;

    phone.textContent = test.find((item) => item.city === event.target.value)
        ? test.find((item) => item.city === event.target.value).phone
        : "not in array";

    address.textContent = test.find((item) => item.city === event.target.value)
        ? test.find((item) => item.city === event.target.value).address
        : "not in array";

});


const gardensSection = document.querySelector(".main__service.service");
gardensSection
    .querySelector(".nav__menu.buttons")
    .addEventListener("click", (e) => {
        const button = e.target.closest(".buttons__second");
        if (
            button &&
            (button.classList.contains("pressed") ||
                gardensSection.querySelectorAll(".buttons__second.pressed").length < 2)
        ) {
            button.classList.toggle("pressed");
            const pressedButtons = gardensSection.querySelectorAll(
                ".buttons__second.pressed"
            );
            if (pressedButtons.length) {
                const pressedIds = Array.from(pressedButtons).map((item) => item.id);
                gardensSection.querySelectorAll(".pic__item").forEach((item) => {
                    let contains = false;
                    pressedIds.forEach((itemId) => {
                        if (item.classList.contains(itemId)) contains = true;
                    });
                    if (!contains) item.classList.add("blur");
                    else item.classList.remove("blur");
                });
            } else
                gardensSection.querySelectorAll(".pic__item").forEach((item) => {
                    item.classList.remove("blur");
                });
        }
    });

// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//drop-down menu of languages

document.getElementById('button-info__list-items').addEventListener("click", () => {
    const info_list_items = document.querySelectorAll('.info__list-items').item(document.querySelectorAll('.info__list-items').length - 1);
    info_list_items.classList.toggle('info__list-items-active');
    const menu_drop = document.querySelector('.drope-menu');
    menu_drop.classList.toggle('drope-menu-active');
})


//выбор языка из выподающего списка
document.addEventListener('click', (elem) => {
    if (elem.target.classList.contains('drope-menu__items-link')) {
        document.getElementById('button-info__list-items').innerHTML = elem.target.textContent;
    }
})

//слайдер
//анимация при наведении
const img_car = document.querySelector('.slider__block-car');
const img_car_posotoin = img_car.getBoundingClientRect();
const slider_block = document.querySelector('.slider__body');
const colections_items = document.querySelectorAll('.slider__item');
const first_slid_item = document.querySelector('.slider__item');
const data_icons = document.querySelectorAll('.slider__item-label');
let offset = 0;

function resetClassActive() {
    colections_items.forEach((elem, i) => {
        elem.classList.remove('slider_item_active');
    })
    data_icons.forEach((elem) => {
        elem.classList.remove('slider_item-label_active');
    })
}

document.addEventListener("mouseover", function (elem) {
    if (elem.target.classList.contains('slider__item-label')) {
        resetActivCar(elem);
    }
})

function resetActivCar(elem) {
    const target_icon = elem.target;
    const position_icon = target_icon.getBoundingClientRect();
    let elem_position = 0;
    if (!img_car.classList.contains('slider_block_car_active')) {
        img_car.classList.add('slider_block_car_active');
    }
    resetClassActive();
    data_icons.forEach((elem) => {
        elem_position = elem.getBoundingClientRect();
        if (elem_position.left + 100 < img_car_posotoin.left < elem_position.left) {
            img_car.style.left = position_icon.left + 30 + "px";
            if (!target_icon.parentElement.classList.contains('slider_item_active')) {
                target_icon.parentElement.classList.add('slider_item_active');
            }
            if (!target_icon.classList.contains('slider_item-label_active')) {
                target_icon.classList.add('slider_item-label_active');
            }
        }
    })
}
//события по кнопке "больше цен"
document.querySelector('.slider-button__button-action').addEventListener('click', slidRun)
function slidRun() {
    runCar();
    sliderRol();
}

async function carOverSise() {
    resetClassActive();
    img_car.style.left = 5000 + "px";
    if (img_car.classList.contains('slider_block_car_active')) {
        img_car.classList.remove('slider_block_car_active');
    }
}

async function resetCarSise() {
    img_car.style.left = 0 + "px";
}

async function runCar() {
    await carOverSise();
    await setTimeout(resetCarSise, 1000);
}

//смещение слайдера

function sliderRol() {
    let width_slide_item = first_slid_item.getBoundingClientRect();
    offset = offset + (width_slide_item.width * 4);
    if (offset < colections_items.length * width_slide_item.width) {
        slider_block.style.right = offset + "px";
    }
    else {
        slider_block.style.right = 0 + "px";
        offset = 0;
    }
}






























// блок удаления класса активности 
window.onload = function () {
    document.addEventListener('click', checkedClass);
}

function checkedClass(elem) {
    if (!elem.target.classList.contains('info__list-items-button')) {
        const info_list_items = document.querySelectorAll('.info__list-items').item(document.querySelectorAll('.info__list-items').length - 1);
        info_list_items.classList.remove('info__list-items-active');
        const menu_drop = document.querySelector('.drope-menu');
        menu_drop.classList.remove('drope-menu-active');
    }
}
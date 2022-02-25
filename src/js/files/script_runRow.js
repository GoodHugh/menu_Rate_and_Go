let arr_Towns = ["Россия", "Германия", "Польша", "Украина", "Финляндия", "Белоруссия"];


const inner_Town = document.querySelector('.content__title-city');
const inner_Cursor = document.querySelector('.content__title-cursor');

function str_City() {

    let index = 0;
    let name_Сity = [];
    let items = 0;
    let a = '';

    data();
    function data() {
        name_Сity = arr_Towns[items].split('');
    }

    run();
    function run() {
        setTimeout(run, 300);
        a = a + name_Сity[index];
        index++;
        if (name_Сity.length < index) {
            a = '';
            index = 0;
            items++;
            if (items == arr_Towns.length) {
                items = 0;
            }
            data();
        }
        if (a != undefined && a != NaN) {
            inner_Town.innerHTML = a;
            inner_Cursor.innerHTML = '|';
        }
    }
}
str_City();
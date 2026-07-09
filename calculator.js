/* ==========================
   КАЛЬКУЛЯТОР СТОИМОСТИ
   ООО АСЕ
========================== */


function calculatePrice(){


let type = document.getElementById("type");

let width = document.getElementById("width");

let height = document.getElementById("height");

let quantity = document.getElementById("quantity");


if(!type || !width || !height || !quantity){
    return;
}


let basePrice = 0;


switch(type.value){


case "vertical":
    basePrice = 1800;
    break;


case "roller":
    basePrice = 2500;
    break;


case "daynight":
    basePrice = 3200;
    break;


case "mosquito":
    basePrice = 1200;
    break;


default:
    basePrice = 0;

}



let area =
(width.value / 100) *
(height.value / 100);



let total =
Math.round(
basePrice * area * quantity.value
);



if(total < basePrice){
    total = basePrice;
}



document.getElementById("result").innerHTML =

"Примерная стоимость: <b>" 
+ total +
" ₽</b>";



}
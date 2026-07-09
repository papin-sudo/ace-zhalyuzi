// ФОРМА ЗАЯВКИ ООО АСЕ


function sendForm(){


let name =
document.getElementById("name").value;


let phone =
document.getElementById("phone").value;


if(name === "" || phone === ""){


alert(
"Заполните имя и телефон"
);


return;


}



alert(
"Спасибо, " + name + "! Мы свяжемся с вами."
);



}
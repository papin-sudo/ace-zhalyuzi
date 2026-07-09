const BOT_TOKEN = "8921192277:AAEwjiQMO4cdBHGc-5oQHrdP_-duyYtHOEc";

const CHAT_ID = "1098663867";



function sendTelegram(){


let name =
document.getElementById("name").value;


let phone =
document.getElementById("phone").value;



let message =

"Новая заявка с сайта АСЕ\n\n" +

"Имя: " + name +
"\nТелефон: " + phone;



fetch(

"https://api.telegram.org/bot" +

BOT_TOKEN +

"/sendMessage",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

chat_id:CHAT_ID,

text:message

})

}

)



.then(()=>{


alert(
"Спасибо! Мы скоро свяжемся с вами."
);


});


}
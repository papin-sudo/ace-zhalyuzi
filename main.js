/* ==========================
   ООО АСЕ PREMIUM
   Основной JavaScript
========================== */


// Плавная прокрутка по ссылкам

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});




// Анимация появления блоков

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},
{
    threshold:0.15
});



document.querySelectorAll(
'.card, .advantages div, .gallery div, .hero-form'
)
.forEach(el=>{

    el.classList.add('hidden');

    observer.observe(el);

});





// Кнопка звонка на мобильных устройствах

const phoneButtons = document.querySelectorAll('.phone');


phoneButtons.forEach(button=>{

    button.addEventListener('click',()=>{

        console.log(
        'Переход к звонку'
        );

    });

});





// Защита формы от пустой отправки


const formButton = document.querySelector('.hero-form button');


if(formButton){


formButton.addEventListener('click',()=>{


const inputs = document.querySelectorAll(
'.hero-form input'
);


let empty=false;


inputs.forEach(input=>{


if(input.value.trim()===''){

empty=true;

}


});



if(empty){

alert(
'Пожалуйста, заполните все поля'
);

}
else{


alert(
'Спасибо! Мы свяжемся с вами.'
);


}



});


}
// МОБИЛЬНОЕ МЕНЮ


const menuButton =
document.querySelector('.menu-button');


const nav =
document.querySelector('nav');


if(menuButton){


menuButton.addEventListener('click',()=>{


nav.classList.toggle('active');


});


}
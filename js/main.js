
$('.projects__slider').slick({
	nextArrow: '<div class="slider__arrow_rht"><img src="img/slider-next.svg" alt="icon"></div>',
	prevArrow: '<div class="slider__arrow_lft"><img src="img/slider-prev.svg" alt="icon"></div>',
	infinite: false,
})

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


var arrElem = document.querySelectorAll('.aboutme__buttons button');
var arrayElem = [];

for (var i = 0; i < arrElem.length; i++){
	arrayElem.push(arrElem[i]);
	arrElem[i].addEventListener('click', function(e){

		for( let bb of arrElem ){
			bb.classList.remove('button_active')
		}
		this.classList.add('button_active')

		let num = arrayElem.indexOf(e.target)

		for( let ff of document.querySelectorAll('.aboutme__options') ){
			ff.classList.remove('aboutme__options_active')
		}
		document.querySelectorAll('.aboutme__options')[num].classList.add('aboutme__options_active')


	});
}

document.querySelector('.header__burger').addEventListener('click', ()=>{
	document.querySelector('.popup').classList.add('fadeInLeft')
	document.querySelector('.popup').classList.add('popup_active')
	document.querySelector('.popup').classList.remove('fadeOutLeft')
})
document.querySelector('.popup__close').addEventListener('click', ()=>{
	popupAction()
})
document.querySelector('.popup__bgd').addEventListener('click', ()=>{
	popupAction()
})

function popupAction() {
	document.querySelector('.popup').classList.add('fadeOutLeft')
	document.querySelector('.popup').classList.remove('fadeInLeft')
	setTimeout(function () {
		document.querySelector('.popup').classList.remove('popup_active')
	}, 300)
}

// Wow JS
	if(document.querySelector('.wow')) new WOW().init();
// Wow JS

for( let more of document.querySelectorAll('.projects__flat .projects_more') ){

	more.addEventListener('click', function () {

		this.closest('.projects__flat').classList.toggle('projects__flat_show')

		if( this.closest('.projects__flat').classList.contains('projects__flat_show') ){
			this.innerText = 'Свернуть'
		} else {
			this.innerText = 'Подробнее'
		}

	})

}






























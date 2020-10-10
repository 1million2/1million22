
// slick слайдер
$(document).ready(function(){
  $('.slider').slick({

	arrows: false,
	autoplay: true,
  	autoplaySpeed: 7000,
	fade: true,
	infinite: true,
  	cssEase: 'linear',
	draggable: false,
	pauseOnFocus: false,
	pauseOnHover: false,
	swipe: false,

  });
});

// Выпадающий список магазинов при клике на "Магазины"
let dropDownButton = document.querySelector(".dropdown-button");
let dropDownList = document.querySelector(".dropdown")
dropDownButton.onclick = function(){
	dropDownList.classList.toggle("dropdown-visible");
}

// плавное отображение блоков с магазинами на главной странице
let shop = document.querySelectorAll(".shop");
// показываем блоки если страцица загрузилась посередине и не нужно скролить
for ( let shopItem of shop){
	window.addEventListener("DOMContentLoaded", function() {
		if (pageYOffset >= 350) {
			shopItem.classList.add("shop-visible");	
		}
	})
}
// показываем 3 блока с магазинами при скроле на 300px
function showShopContainer1(scrollPos) {
	if (pageYOffset >= scrollPos) {
		setTimeout(
			function iter(i) {
				shop[i].classList.add("shop-visible");
	
				if (++i < (shop.length / 2)) {
					setTimeout(iter, 400, i);
				}
			}, 0, 0);
	}
}
// показываем остальные 3 блока на 1150px
function showShopContainer2(scrollPos) {
	if (pageYOffset >= scrollPos ) {
		setTimeout(
			function iter(i) {
				shop[i].classList.add("shop-visible");
				if (++i < shop.length) {
					setTimeout(iter, 400, i);
				}
			}, 0, 3);
	}
}

// добавляем слушатель и вешаем на него 2 эти функции для отображения блоков при скроле
window.addEventListener("scroll", function () {
	showShopContainer1(400);
	showShopContainer2(1000);
});














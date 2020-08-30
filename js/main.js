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

  $(function(){
    //$('#exampleModal').arcticmodal();

});
});
// Выпадающий список магазинов при клике на "Магазины"
let dropDownButton = document.querySelector(".dropdown-button");
let dropDownList = document.querySelector(".dropdown")
dropDownButton.onclick = function(){
	dropDownList.classList.toggle("dropdown-visible");
}


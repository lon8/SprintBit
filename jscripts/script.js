 var oldScrollY = 0; //Переменные

//Функция вывода меню при нажатии на кнопку Home
function down() {
  if ($("#menu_logo").is(":hidden"))
  {
    $("#menu_logo").slideDown("Slow")
  }
  else
  {
    $("#menu_logo").slideUp("Slow")
  }
}

//Функция скрытия header при прокрутке вниз по странице



window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var div = document.getElementById("header");
  var dY = scrolled - oldScrollY;

  if ( dY > 0 ){
    div.className = "fixed fixed-bottom";
  } else {
    div.className = "fixed fixed-top";
  }

  oldScrollY = scrolled;
}

window.upscroll = function() {

}
//Функция побуквенной анимации текста

$(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
  $('.scrollToTop').fadeIn();
  } else {
  $('.scrollToTop').fadeOut();
  }
  });
  $('.scrollToTop').click(function() {
  $('body,html').animate({scrollTop:0},700);
  });
  });

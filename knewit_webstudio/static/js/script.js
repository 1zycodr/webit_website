
// function to change the new webp picture format do not delete=========================================
function testWebP(callback) {
var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});
// function to change the new webp picture format do not delete=========================================

//Slider page four content =================================================================
$(document).ready(function(){
  $('.page_four').slick({
    infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      vertical: true,
      prevArrow: $('.next_slide'),
      nextArrow: $('.prev_slide'),
  });
});

// MAIN SLIDER ALL PAGE =======================================================================
$(document).ready(function(){
  $('.main_container').slick({
    infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      appendDots: $('.center_nav_inner, .sub-menu'),
      prevArrow: $('.prev-btn'),
      nextArrow: $('.next-btn'),
  });
});

setTimeout(()=>{
    let mobileNav = document.querySelector('#sub-menu'), // moblie menu
        navDots = document.querySelectorAll('#sub-menu li') // menu item
    mobileNav.addEventListener('click', (e)=>{ // listener
      for (let i = 0; i < navDots.length; i++){ 
        navDots[i].removeAttribute('class') // clear class active
        e.target.setAttribute('class', 'slick-active') // add class active
      }
    })
  },100)
// BURGER_MENU ==================================================================================

$(".button-burger").click(function () {
    $(this).closest("body").toggleClass("active");
});

// Open form click btn form ======================================
document.querySelector('.open_form').addEventListener('click', function () {
  document.querySelector('.main_window').style.display = 'flex'
  
  document.querySelector('.blur').style.filter = 'blur(6px)'
  
})

document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.main_window').style.display = 'none'
  
  document.querySelector('.blur').style.filter = 'blur(0px)'
  
})
// FOR FORM NUMBER ==============================================================================
    if (document.querySelector('#phone')) {
      $(function(){
          $("#phone").mask("8(999) 999-9999", {
              completed: function(){}
          });
         $("#phone_2").mask("8(999) 999-9999", {
              completed: function(){}
          });
      });
  }
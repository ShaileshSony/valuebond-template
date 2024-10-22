// const nav = document.getElementById('top-nav');
// window.onscroll = function () { 
//     if (document.body.scrollTop >= 200 ) {
//        nav.classList.add("nav-colored");
//        nav.classList.remove("nav-transparent");
//     } 
//     else {
//        nav.classList.add("nav-transparent");
//        nav.classList.remove("nav-colored");
//     }
// };

$(function () {
    $(document).scroll(function () {
      var $nav = $(".top-head");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  / toggle navbar function//

  
$(document).ready(function(){
    $("#toggle-btn").click(function(){
      $(".menubar-box").toggleClass("active-toggle");
    });
  });
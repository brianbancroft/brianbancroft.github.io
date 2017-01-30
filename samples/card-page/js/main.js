// $(document).ready(function() {

//   $(window).scroll(function(){
//     $(".stationary-card").css("opacity", 1 - $(window).scrollTop() / 500);
//     $('.top-menu').css('opacity', 0 + $(window).scrollTop() / 1000);
//   });

//   // General
//   $('html').removeClass('no-js');

// });
window.addEventListener("scroll", function(event) {
    var top = this.scrollY;
    document.getElementsByClassName('stationary-card')[0].style.opacity = 1 - (top / 500);
    document.getElementsByClassName('top-menu')[0].style.opacity = 0 + (top / 740);
}, false);

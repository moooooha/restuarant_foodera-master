///<reference types="../@types/jquery/"
$(function () {
  $(".loader").fadeOut(1500, function () {
    $(".loading").slideUp(1500, function () {
      $("body").css("overflow", "auto");
    });
  });
});

$(".nav-ul li a").on("click", function (target) {
  $(target).siblings().removeClass("active-link");
  $(target).addClass("active-link");
  console.log(target);
  console.log("hello");
});

AOS.init();

$(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav:true,
    items: 1,
  });
});

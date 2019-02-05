$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 4000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Web Developer", "Software Engineer", "Life Long Learner"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      items: 4,
      responsive:{
          0:{
              items:2
          },
          480:{
              items:3
          },
          738:{
              items:4
          },
          998:{
              items:5
          },
          1208:{
              items:6
          },
          1328:{
              items:7
          }
      }
  });

  $("[data-fancybox]").fancybox();

  $("#navigation li a").click(function(event) {
    event.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition -50 }, "slow");

  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    const body = $("body");

    if($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    }
    else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }

});

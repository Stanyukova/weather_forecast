$(document).ready(() => {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 3,
    speed: 2000,
    easing: "_linear",
    autoplaySpeed: 800,
  });
});

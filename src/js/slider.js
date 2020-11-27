$(document).ready(function () {
    $(".slider").slick(
      {
        infinite: true,
        arrows: true,
        prevArrow: '<button class="slick-prev" type="button">❰❰</button>',
        nextArrow: '<button class="slick-next" type="button">❱❱</button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        mobileFirst: false,
      },
    );
  });
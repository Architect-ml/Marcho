// Slick slider 
export const slickSlider = () => {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
};

// Fancy box
Fancybox.bind("[data-fancybox]", {
});

// Rate Yo!
$(function () {

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#cccccc",
    ratedFill: "#ffc35b",
    readOnly: true
  });

});


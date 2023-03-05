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

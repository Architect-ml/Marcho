import $ from "jquery";
import 'slick-carousel/slick/slick.min.js';

export function slickSlider() {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  })
} 

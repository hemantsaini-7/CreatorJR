
// $(window).scroll(function() {
//   if ( $(document).scrollTop() > $(".header_top").outerHeight() ) {
//     $('.header_outer').addClass('shrink');
//   } else {
//     $('.header_outer').removeClass('shrink');
//   }
// });


$(function () { var shrinkHeader = 2; $(window).scroll(function () { var scroll = getCurrentScroll(); if (scroll >= shrinkHeader) { $('header').addClass('shrink'); } else { $('header').removeClass('shrink'); } }); function getCurrentScroll() { return window.pageYOffset || document.documentElement.scrollTop; } });

$(".menu_btn").click(function(){
    $("body").toggleClass("adpannl");
});
$(".overlay").click(function(){
$("body").removeClass("adpannl");
});

$(".pricing_btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".curriculam_area").offset().top -75
        }, 1200);
    });

$('.testimonial_slider').slick({
	  dots: true,
	  arrows: false,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
      adaptiveHeight: true
});

// Scroll_top_top
        jQuery(window).on("scroll", function() {
            if (jQuery(this).scrollTop() > 100) {
                jQuery(".scrollup").addClass("active");
           }
           else {
                jQuery(".scrollup").removeClass("active");
            }
        });

        jQuery(".scrollup").on("click", function() {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        AOS.init();

 $('#preloader').delay(500).fadeOut('slow');
    $('body').css('overflow', 'auto');


$(document).ready(function(){
      $('.hddr_menu li a').click(function(){
        $('.hddr_menu li').removeClass("active_menu");
        $(this).parents(".hddr_menu li").addClass("active_menu");
    });
});

var telInput = $(".number_fill .form-control, .country_code .form-control"),
  errorMsg = $(".error-msg"),
  validMsg = $(".valid-msg");

// initialise plugin
telInput.intlTelInput({

  allowExtensions: true,
  formatOnDisplay: true,
  autoFormat: true,
  autoHideDialCode: true,
  autoPlaceholder: true,
  defaultCountry: "auto",
  ipinfoToken: "yolo",

  nationalMode: false,
  numberType: "MOBILE",
  //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  preferredCountries: ['sa', 'ae', 'qa','om','bh','kw','ma'],
  preventInvalidNumbers: true,
  separateDialCode: true,
  initialCountry: "auto",
  geoIpLookup: function(callback) {
  $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    var countryCode = (resp && resp.country) ? resp.country : "";
    callback(countryCode);
  });
},
   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
});

var reset = function() {
  telInput.removeClass("error");
  errorMsg.addClass("hide");
  validMsg.addClass("hide");
};

// on blur: validate
telInput.blur(function() {
  reset();
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
      validMsg.removeClass("hide");
    } else {
      telInput.addClass("error");
      errorMsg.removeClass("hide");
    }
  }
});

// on keyup / change flag: reset
telInput.on("keyup change", reset);





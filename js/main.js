// variables
const main = $(".main");
const body = $("body");
const html = $("html");
const hamburger = $(".hamburger");
const sidenav = $(".sidenav");
const desktopNav = $(".navigation");
const desktopLinks = $(".navigation__item");
const desktopNavWrapper = $(".navigation__wrapper");
const socialIcon = $(".navigation__social__icon");
const navLogo = $(".navigation__logo");
const parallax = $(".parallax");
const modalBody = $(".modal-body");
const modalTrigger = $("#exampleModalPreview");

$(document).ready(function() {
  $("#hamburger").click(handleNavAnimationClick);

  $(parallax).parallax({ imageSrc: "/img/photos-one.jpg" });

  fetchInstagram();

  $(modalTrigger).on("show.bs.modal", e => {
    let imageUrl = $(e.relatedTarget).attr("src");
    let modalImage = $(".modal-image").attr("src", imageUrl);
    $(modalBody).append(modalImage);
  });
});

// Handle all scroll events
$(document).scroll(function() {
  $(this).scrollTop() > 10
    ? ($(desktopNav).addClass("navigation__nav-scrolled"),
      $(desktopLinks).addClass("navigation__links-scrolled"),
      $(socialIcon).addClass("navigation__links-scrolled"),
      $(desktopNavWrapper).addClass("navigation__wrapper__scrolled"),
      $(navLogo).addClass("navigation__logo__scrolled"))
    : ($(desktopNav).removeClass("navigation__nav-scrolled"),
      $(desktopLinks).removeClass("navigation__links-scrolled"),
      $(socialIcon).removeClass("navigation__links-scrolled"),
      $(desktopNavWrapper).removeClass("navigation__wrapper__scrolled"),
      $(navLogo).removeClass("navigation__logo__scrolled"));
  
  fadeInAnimation();
});

// Handle Loading Animation Fadeout
$(window).on('load', () => {
  $('#loading').fadeOut();
  $('.hero__logo').addClass('fade-on-load');
  setTimeout(function() {
    $('.hero__music-container1').addClass('fade-on-load');
  }, 500)
  setTimeout(function() {
    $('.hero__music-container2').addClass('fade-on-load');
  }, 800)
  setTimeout(function() {
    $('.hero__music-container3').addClass('fade-on-load');
  }, 1100)
})

// Handle Sidenav hamburger click
handleNavAnimationClick = () => {
  if ($(hamburger).hasClass("on")) {
    $(hamburger).removeClass("on");
    $(sidenav).removeClass("sidenav-transform-x");
    $(main).removeClass("main-transform-x");
    $(body).removeClass("no-scroll");
    $(html).removeClass("no-scroll");
  } else {
    $(hamburger).addClass("on");
    $(sidenav).addClass("sidenav-transform-x");
    $(main).addClass("main-transform-x");
    $(body).addClass("no-scroll");
    $(html).addClass("no-scroll");
  }
};

$.fn.scrollView = function() {
  return this.each(function() {
    $("html, body").animate(
      {
        scrollTop: $(this).offset().top
      },
      1000
    );
  });
};

$(".navigation__logo, .footer__logo").on("click", e => {
  e.preventDefault();
  $("#hero").scrollView();
});

$(".work-link-sidenav").on("click", e => {
  e.preventDefault();
  handleNavAnimationClick();
  $("#about").scrollView();
});

$(".home-link-sidenav").on("click", e => {
  e.preventDefault();
  handleNavAnimationClick();
  $("#hero").scrollView();
});

$(".tour-link-sidenav").on("click", e => {
  e.preventDefault();
  handleNavAnimationClick();
  $(".tour").scrollView();
});

$(".social-link-sidenav").on("click", e => {
  e.preventDefault();
  handleNavAnimationClick();
  $(".instagram").scrollView();
});

$(".contact-link-sidenav").on("click", e => {
  e.preventDefault();
  handleNavAnimationClick();
  $("#footer").scrollView();
});

$(".work-link").on("click", e => {
  e.preventDefault();
  $("#about").scrollView();
});

$(".tour-link").on("click", e => {
  e.preventDefault();
  $("#tour").scrollView();
});

// $(".work-link, .hero__button, .about__btn--more").on("click", e => {
//   e.preventDefault();
//   $(".art").scrollView();
// });

$(".social-link").on("click", e => {
  e.preventDefault();
  $("#instagram").scrollView();
});

$(".contact-link").on("click", e => {
  e.preventDefault();
  $("#footer").scrollView();
});


function fadeInAnimation () {
  let fadeImage = $('.fade-this-in');
  let windowHeight = $(window).outerHeight();
  let windowTopPosition = $(window).scrollTop();
  let windowBottomPosition = (windowTopPosition + windowHeight);

  $.each(fadeImage, function(){
      var el = $(this);
      var elHeight = el.outerHeight();
      var elTopPosition = el.offset().top;
      var elBottomPosition = (elTopPosition + elHeight);

      if ((elBottomPosition >= windowTopPosition) && (elTopPosition <= windowBottomPosition)){
          el.addClass('fade-on-scroll')
      } else {
          return
      }
  })
}
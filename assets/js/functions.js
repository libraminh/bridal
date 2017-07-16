$(document).ready(function() {
  scrollPage();
  scrollReveal();

})

$(window).scroll(function(){
      changeTextColor();
})

function changeTextColor() {

  if($('body').is('.ChangeText')) {

    var positionSection1 = $('section.thumb3').offset().top,
        positionSection2 = $('section.thumb4').offset().top,
        wScroll = $(window).scrollTop(),
        wHeight = $(window).height(),
        link = $('.navbar-nav a, .navbar-brand'),
        social = $('.social-group i');

    if(positionSection1 - wHeight/1.1 < wScroll && wScroll < positionSection2 - wHeight/1.1) {
      $(social).addClass('change-color');
    } else {
      $(social).removeClass('change-color');
    }

    if(positionSection1 - wHeight/10 < wScroll && wScroll < positionSection2) {
      $(link).addClass('change-color');
    } else {
      $(link).removeClass('change-color');
    }

  }

}

function scrollReveal() {
  window.sr = ScrollReveal();
  // sr.reveal('.navbar', { duration: 1000 });
  sr.reveal('.left-thumb', { duration: 1000, distance: '200px', origin: 'left' });
  sr.reveal('.promo-content-odd:first-child', { duration: 1200, delay: 300, distance: '400px', origin: 'left' });
  sr.reveal('.promo-content-odd', { duration: 1200, distance: '400px', origin: 'left' });
  sr.reveal('.promo-content-even', { duration: 1200, distance: '400px', origin: 'right' });
}

function scrollPage() {
  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 100;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).addClass('open');
        $(this).siblings().addClass('close');
        $(this).siblings().removeClass('open');
        $(this).siblings().removeClass('close');

      }
    })
  })
}

$(document).ready(function() {
  scrollPage();
  scrollReveal();

})

function scrollReveal() {
  window.sr = ScrollReveal();
  sr.reveal('.navbar', { duration: 1000 });
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

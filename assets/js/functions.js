$(document).ready(function() {
  scrollPage();
  playCarousel();
  scrollReveal();
  showPopover();
  activeColorCarousel();
  openCart();
  numberButton();
  onePageScroll();

})

// One Page Scroll
function onePageScroll() {
  if($('body').is('.index-page')) {
    $('.fullpage').fullpage({
      //Navigation
  		menu: '#menu',
  		lockAnchors: false,
  		// anchors:['firstPage', 'secondPage'],
  		navigation: true,
  		navigationPosition: 'right',
  		// navigationTooltips: ['firstSlide', 'secondSlide'],
  		showActiveTooltip: false,
  		slidesNavigation: false,
  		slidesNavPosition: 'bottom',

  		//Scrolling
  		css3: true,
  		scrollingSpeed: 700,
  		autoScrolling: true,
  		fitToSection: true,
  		fitToSectionDelay: 1000,
  		scrollBar: true,
  		easing: 'easeInOutCubic',
  		easingcss3: 'ease',
  		loopBottom: false,
  		loopTop: false,
  		loopHorizontal: true,
  		continuousVertical: false,
  		continuousHorizontal: false,
  		scrollHorizontally: false,
  		interlockedSlides: false,
  		dragAndMove: false,
  		offsetSections: false,
  		resetSliders: false,
  		fadingEffect: false,
  		normalScrollElements: '#element1, .element2',
  		scrollOverflow: false,
  		scrollOverflowReset: false,
  		scrollOverflowOptions: null,
  		touchSensitivity: 15,
  		normalScrollElementTouchThreshold: 5,
  		bigSectionsDestination: null,

  		//Accessibility
  		keyboardScrolling: true,
  		animateAnchor: true,
  		recordHistory: true,

  		//Design
  		controlArrows: true,
  		verticalCentered: true,
  		sectionsColor : ['#ccc', '#fff'],
  		paddingTop: '3em',
  		paddingBottom: '10px',
  		fixedElements: '#header, .footer',
  		responsiveWidth: 0,
  		responsiveHeight: 0,
  		responsiveSlides: false,
  		parallax: false,
  		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

  		//Custom selectors
  		sectionSelector: '.section',
  		slideSelector: '.slide',

  		lazyLoading: true,

  		//events
  		onLeave: function(index, nextIndex, direction){},
  		afterLoad: function(anchorLink, index){},
  		afterRender: function(){},
  		afterResize: function(){},
  		afterResponsive: function(isResponsive){},
  		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
  		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  	});
  }
}

// Numbe Shop Button
function numberButton() {
  jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fa fa-angle-up" aria-hidden="true"></i></div><div class="quantity-button quantity-down"><i class="fa fa-angle-down" aria-hidden="true"></i></div></div>').insertAfter('.quantity input');
  jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });
}

function openCart() {
  var linkCart = $('.main-nav #shoppingmenu'),
      cart = $('.main-nav #shoppingmenu #Capa_1'),
      badge = $('.main-nav #shoppingmenu .badge')

  $(linkCart).on('click', function(){
    $(cart).toggleClass('open-cart');
    $(badge).toggleClass('open-cart');
  })

  $(linkCart).focusin(function(){
    $(cart).addClass('open-cart');
    $(badge).addClass('open-cart');
  })

  $(linkCart).focusout(function(){
    $(cart).removeClass('open-cart');
    $(badge).removeClass('open-cart');
  })

}

function activeColorCarousel() {
  var pic = $('.carousel-4 img, .carousel-2 img');

  $(pic).on('click', function(){
    $(this).addClass('active-color');
    $(this).parent().parent().siblings().find('img').removeClass('active-color');
  })
}

function showPopover() {
  $('#optionsRadios2').popover({
    'placement' : 'top'
  })
}

function playCarousel() {
  if($('body').is('.product-detail')) {

    $('.carousel-3').owlCarousel({
          items: 4,
          margin: 40,
          loop: true,
          nav: true,
          navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
          responsive:{
            0:{
                items:2,
            },
            768:{
                margin: 20,
                items:2,
            },
            1000:{
                items:3,
                dots: false,
            },
          }
      });

    $('.carousel-2').owlCarousel({
          margin: 10,
          nav: true,
          dots: false,
          navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
          responsive:{
            0:{
                items:5,
            },
            768:{
                margin: 10,
                items:4,
            },
            1000:{
                items:4,
            },
          }
      });

    $('.carousel-1').owlCarousel({
      items:1,
      loop:false,
      margin:10,
      URLhashListener:true,
      autoplayHoverPause:true,
      startPosition: 'URLHash',
      dots: false,
    });

    $('.carousel-4').owlCarousel({
      items:6,
      loop:false,
      margin:10,
      URLhashListener:true,
      autoplayHoverPause:true,
      startPosition: 'URLHash'
    });

  }
}

$(window).scroll(function(){
      changeTextColor();
})

function changeTextColor() {

  if($('bodya').is('.index-pagea')) {

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
        $(this).addClass('open').siblings().addClass('close');
        $(this).siblings().removeClass('open');
        $(this).siblings().removeClass('close');
      }
    })
  })
}

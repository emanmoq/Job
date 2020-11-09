jQuery(function ($) {

  $('.CompaniesCar').owlCarousel({
    autoplay: true,
    navText :['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    loop: true,
    margin: 15,
    nav:true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      }
    }
  });
  $(window).scroll(function () {
      
    scrollTop = $(window).scrollTop();

    if (scrollTop >($('.HeroCont').height()+ 200)) {
        $('.menu').addClass('scrollNav');
    }

    else {
        $('.menu').removeClass('scrollNav');
    }

});
    
});


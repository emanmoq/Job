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
    else if (scrollTop >($('.innerContent').height()+ 200)) {
      $('.menu').addClass('scrollNav');
  }

    else {
        $('.menu').removeClass('scrollNav');
    }

});
$('.toggleBtn').click(function () {
  $('.toggleBtn').not(this).find('i:first').removeClass('lni lni-minus').addClass('lni lni-plus ');
  $(this).find('i:first').toggleClass('lni lni-minus lni lni-plus');
})
$('.toggleBtn').click(function () {
  $(this).parent().parent().find('.jobsideList').slideToggle(400);
});
$(".close").click(function(){
  $(".overlay").css("display","none");
  $(this).parent().collapse('hide');
});

    $(".navbar-toggler").click(function(){
      $(".overlay").css("display","block");
      
    });
});


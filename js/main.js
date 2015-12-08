(function() {

  /**
  * scroll to top
  */
  $('.scroll').click(function(e){
    $('html, body').animate({
      scrollTop: $('#top').offset().top
    }, 1000);
  });

  $('.menu-icon').click(function (e) {
    e.preventDefault();
    if($('.wrap-mobile-menu').is(':animated')) {
      return;
    } else {
      $('.wrap-mobile-menu').slideToggle('slow');
    }
  });


  /**
  * smooth scroll (from menu)
  */
  $('.wrap-menu a').click(function (e) {
    e.preventDefault();
    var menuHeight = 166;
    var target = $(this).attr('href');
    $('html body').animate({
      scrollTop: ($(target).offset().top)
    }, 1500);
  });

  $('.mobile-menu a').click(function (e) {
    e.preventDefault();
    var menuHeight = 166;
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top - menuHeight)
    }, 1500);
    $('.wrap-mobile-menu').slideToggle('slow');
  });

  /**
  * smooth scroll from page links
  */
  $('.learn').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html body').animate({
      scrollTop: ($(target).offset().top)
    }, 1000);
  });

  $('.contact-us').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html body').animate({
      scrollTop: ($(target).offset().top)
    }, 1000);
  });

  console.info('-- scripts loaded --');
}());
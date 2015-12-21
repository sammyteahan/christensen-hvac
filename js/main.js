(function() {

  /**
  * @desc scroll to top
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
  * @desc smooth scroll (from menu)
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
  * @desc smooth scroll from page links
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

  /**
  * @desc setup text change on click
  */
  var info = document.querySelector('.main-info');
  var one = document.querySelector('.box.one');
  var two = document.querySelector('.box.two');
  var three = document.querySelector('.box.three');
  var four = document.querySelector('.box.four');
  var five = document.querySelector('.box.five');
  var six = document.querySelector('.box.six');
  var seven = document.querySelector('.box.seven');
  var eight = document.querySelector('.box.eight');

  one.addEventListener('click', setAsMain);
  two.addEventListener('click', setAsMain);
  three.addEventListener('click', setAsMain);
  four.addEventListener('click', setAsMain);
  five.addEventListener('click', setAsMain);
  six.addEventListener('click', setAsMain);
  seven.addEventListener('click', setAsMain);
  eight.addEventListener('click', setAsMain);

  var content = [
    'We service all brands and equipment',
    'From sizing, to efficiency, to brands, - we have the experience to help you navigate your options.',
    'When it comes to heating your home and water, cooking and drying clothes, let us help you make the choice between products that provides you the most efficiencies for your home.',
    'Radiant heaters, unit heaters, tube heaters, ventilation, and exhaust systems; we service and install all major brands.',
    'Quality air purifiers can reduce particle counts and exposure to airborne allergens and irritants.',
    'Maximize your energy savings with a smart thermostat that can be controlled from your smartphone.',
    'Whole home humidity offers many proven benefits to your health, home and comfort.',
    'We provide gas lines to fire places, kitchen appliances as well as to outdoor barbecues, fire pits, and generators.',
    'Custom ductwork to supply and return air vents and we can install dampers, and therm controls.'
  ];

  /**
  * @desc event listener to change text
  */
  function setAsMain() {
    info.textContent = content[parseInt(this.dataset.id)];
  }

  console.info('-- scripts loaded --');
}());
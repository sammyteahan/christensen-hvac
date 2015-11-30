(function() {

  /**
  * Initialize smooth scroll
  */
  smoothScroll.init({
    speed: 1000,
    easing: 'easeInOutCubic',
    updateURL: false,
    offset: 0
  });

  var icon = document.querySelector('.menu-icon-wrapper');
  var menu = document.querySelector('.wrap-mobile-menu');

  var toggleClass = function() {
    menu.classList.toggle('is-active');
  }

  icon.addEventListener('click', toggleClass);

  console.log('-- js loaded --');
}());
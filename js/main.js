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
  var menuList = document.querySelector('.wrap-mobile-menu > ul');

  var toggleClass = function() {
    if(!menu.clientHeight) {
      menu.style.height = 166 + 'px';
      menuList.style.marginTop = 0;
    } else {
      menu.style.height = 0;
    }
    // menu.classList.toggle('is-active');
  }

  icon.addEventListener('click', toggleClass);

  console.log('-- js loaded --');
}());
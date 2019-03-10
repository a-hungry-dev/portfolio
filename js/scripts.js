let last_known_scroll_position = 0;
let ticking = false;

function hideSplashContainer() {
  var splashContainer = document.querySelector('.splashContainer');
  splashContainer.classList.add('hide');
};

function doSomething(scroll_pos) {
  var navigation = document.querySelector('.navigation');
  if (scroll_pos >= 20) {
    navigation.classList.add('alt');
  } else {
    navigation.classList.remove('alt');
  };
};

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});
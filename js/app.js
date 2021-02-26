$(document).ready(() => {
  // Variables for flipLoop()
  let n = $('.c').length;
  let x = 0;
  let y = 1;
  let a = 1;
  let sec = 500;

  // Set Footer Year
  $('#footer #year').text(new Date().getFullYear());

  // Initialize
  // * Animations *
  flipLoop();
  fadeInHome();

  // ====================================================
  // 		  			Action Listeners
  // ====================================================
  $('.downarrow').on('click', () => {
    $.fn.fullpage.moveSectionDown();
  });

  // ====================================================
  // 		  			FUNCTIONS
  // ====================================================
  function flipLoop() {
    setTimeout(() => {
      sec = 30;
      $(`.a:nth-of-type(${y}) .c:nth-child(${++x})`).css(
        'animation',
        `flip 30s ease-in-out forwards`
      );
      if (x == $(`.a:nth-of-type(${y}) .c:nth-child(n)`).length) {
        x = 0;
        y++;
      }
      a++ < 18 ? flipLoop() : null;
    }, sec);
  }
  function fadeInHome() {
    setTimeout(() => {
      $('#fadein-home').addClass('fadein-float');
      $('#fadein-home').css('opacity', '1');
      setTimeout(() => {
        $('.c-arrow').css('opacity', '1');
      }, 1000);
    }, 1800);
  }
});

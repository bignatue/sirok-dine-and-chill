$(document).ready(function () {	
  
  // delay on click to to anchor link
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function() {
			window.location.hash = target;
		});
  });
  
  // Scroll to top button
  $('#scrollTop').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1000);
  });

  $(window).scroll(function () {
      if ($(window).scrollTop() >= 1500) {
          $('#scrollTop').fadeIn();
      } else {
          $('#scrollTop').fadeOut();
      }
  });

});

/* $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var fadeStart = 100; // Adjust this value to determine when the fade-out starts
    var fadeUntil = 400; // Adjust this value to determine when the fade-out completes

    if (scrollTop <= fadeStart) {
        $('h1, p').removeClass('fade-out');
        $('.fade-in').removeClass('show');
        $('.contact-section').removeClass('fade-in');
    } else if (scrollTop <= fadeUntil) {
        var opacity = 1 - (scrollTop - fadeStart) / (fadeUntil - fadeStart);
        $('h1, p').css('opacity', opacity);
        $('.fade-in').removeClass('show');
        $('.contact-section').removeClass('fade-in');
    } else {
        $('h1, p').addClass('fade-out');
        $('.fade-in').addClass('show');
        $('.contact-section').addClass('fade-in');
    }
});

$(document).ready(function() {
    $('.contact-section').addClass('fade-in');
}); */
/* $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var windowHeight = $(this).height();
    
    $('.content, .company-motto, .testimonials').each(function() {
      var elementOffset = $(this).offset().top;
      var distanceFromTop = elementOffset - scrollTop;
      
      if (distanceFromTop > -windowHeight && distanceFromTop < windowHeight) {
        var opacity = 1 - Math.abs(distanceFromTop) / windowHeight;
        $(this).css('opacity', opacity);
      } else {
        $(this).css('opacity', 0);
      }
    });
  });
  
  $(document).ready(function() {
    $('.content, .company-motto, .testimonials').css('opacity', 0);
  }); */
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var windowHeight = $(this).height();
    
    $('.content, .company-motto, .testimonials').each(function() {
      var elementOffset = $(this).offset().top;
      var distanceFromTop = elementOffset - scrollTop;
      var fadeStart = -windowHeight * 0.4; // Adjust this value to control the delay
      var fadeEnd = windowHeight * 0.4; // Adjust this value to control when the content starts fading out
      
      if (distanceFromTop > fadeStart && distanceFromTop < fadeEnd) {
        var opacity = 1;
        $(this).css('opacity', opacity);
      } else if (distanceFromTop <= fadeStart) {
        $(this).css('opacity', 0);
      } else {
        var opacity = 1 - (distanceFromTop - fadeEnd) / (windowHeight * 0.25); // Adjust this value to control the fade-out speed
        $(this).css('opacity', opacity);
      }
    });
    
    $('.fade-in').each(function() {
      var elementOffset = $(this).offset().top;
      var distanceFromTop = elementOffset - scrollTop;
      var fadeStart = -windowHeight * 0.5; // Adjust this value to control the delay
      var fadeEnd = windowHeight * 0.4; // Adjust this value to control when the content starts fading out
      
      if (distanceFromTop > fadeStart && distanceFromTop < fadeEnd) {
        var opacity = 1;
        $(this).css('opacity', opacity);
      } else if (distanceFromTop <= fadeStart) {
        $(this).css('opacity', 0);
      } else {
        var opacity = 1 - (distanceFromTop - fadeEnd) / (windowHeight * 0.25); // Adjust this value to control the fade-out speed
        $(this).css('opacity', opacity);
      }
    });
  });
  
  $(document).ready(function() {
    $('.content, .company-motto, .testimonials, .fade-in').css('opacity', 0);
  });
  
/* 
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var windowHeight = $(this).height();
  
    $('.content, .company-motto, .testimonials, .fade-in').each(function() {
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
  }); */
  
  $(document).ready(function() {
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      var windowHeight = $(this).height();
  
      $('.content, .company-motto, .testimonials, .fade-in').each(function() {
        var elementOffset = $(this).offset().top;
        var distanceFromTop = elementOffset - scrollTop;
        var fadeStart = -windowHeight * 0.4; // Adjust this value to control the delay
        var fadeEnd = windowHeight * 0.6; // Adjust this value to control when the content starts fading out
  
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
  
    $(window).trigger('scroll');
  });
  
  
  
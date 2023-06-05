$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var fadeStart = 100; // Adjust this value to determine when the fade-out starts
    var fadeUntil = 400; // Adjust this value to determine when the fade-out completes

    if (scrollTop <= fadeStart) {
        $('h1, p').removeClass('fade-out');
    } else if (scrollTop <= fadeUntil) {
        var opacity = 1 - (scrollTop - fadeStart) / (fadeUntil - fadeStart);
        $('h1, p').css('opacity', opacity);
    } else {
        $('h1, p').addClass('fade-out');
    }
});

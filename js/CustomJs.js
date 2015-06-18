//Documentation

//1.Scrolling Parallax
//2.Smooth Scroll


// 1.Scrolling Parallax
// Using jquery.scrolling-parallax.js
$.scrollingParallax('img/body-dg.png', {
    enableHorizontal: true,
    bgWidth : '200%'
});

//2.Smooth Scroll

//$(document).bind('mousewheel', function (e) {
//    var nt = $(document.body).scrollTop() - (e.deltaY * e.deltaFactor * 100);
//    e.preventDefault();
//    e.stopPropagation();
//    $(document.body).stop().animate({
//        scrollTop: nt
//    }, 500, 'easeInOutCubic');
//})
$(window).load(function () {
    $("body").mCustomScrollbar({
        theme:"dark",
        axis: "y",
        scrollbarPosition: "outside"
    });
});

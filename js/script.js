$(function () {
    $(window).scroll(function () {
        var fixed = $(this).scrollTop()
        if (fixed > 50) {
            $(".sub-menu").addClass("sticky-menu")
        } else {
            $(".sub-menu").removeClass("sticky-menu")
        }
    })
    var containerEl = document.querySelector('.mixit-wrapper');
    var mixer = mixitup(containerEl);
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
})
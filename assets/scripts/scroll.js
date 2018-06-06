$(function() {
    $(".scrollto").click(function() {
        let anchor = $(this).attr("href");
        jQuery("html,body").stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
        return false;
    });
});
$(document).ready(function(){
    var up = $('#uproll');
    // up.fadeOut(0);
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            up.fadeIn();
        } else {
            up.fadeOut();
        }
    })
    up.on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 0)
    })
})

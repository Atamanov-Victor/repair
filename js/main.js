$(document).ready(function(){
    var up = $('#up');
    // up.fadeOut(0);
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            up.fadeIn();
        } else {
            up.addClass('uproll_active')
            up.fadeOut();
        }
    })
    up.on('click', function(){
        $('html').animate({
            scrollTop: 0
        }, 0)
    })
})

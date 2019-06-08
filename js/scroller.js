$(document).ready(function() {
    var portfolioTitle = $('#portfolio-title');
    console.log(portfolioTitle.offset().top); 
    $(window).scroll(function(){ 
    if($(this).scrollTop() + 700 > portfolioTitle.offset().top) {
        portfolioTitle.addClass("fadingOut")
    }
    })
})
$(document).ready(function() {
    $('#carousel').owlCarousel({
        loop:true, 
        margin:30, 
        nav:true, 
        navText:[$('.arrows__left'), $('.arrows__right')],
        dots: false,
        responsive:{ 
            0:{
                items:1
            },
            800:{
                items:2
            },
            1280:{
                items:3
            }
        }
    });
});
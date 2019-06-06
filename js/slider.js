// $(document).ready(function(){
//     $('.slider').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         prevArrow: $('.arrows__left'),
//         nextArrow: $('.arrows__right'),
//         responsive: [
//             {
//                 breakpoint: 1280,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 800,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     })
// })

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
$(document).ready(function(){
    var button = $('#button'); 
    var modal = $('#modal')
    var close = $('#close')
    var prices = $('.card__link')
    prices.on('click', function() { 
        modal.addClass('modal_active');
        var leave = setTimeout(function(){
            modal.removeClass('modal_active')
            clearTimeout(leave);
         }, 5000) 
    })
    button.on('click', function(){
        modal.addClass('modal_active');
        var leave = setTimeout(function(){
            modal.removeClass('modal_active')
            clearTimeout(leave);
         }, 5000) 
    })
    close.on('click', function(){
        modal.removeClass('modal_active');
    })
})
$(document).ready(function(){
    var button = $('#button'); 
    var modal = $('#modal')
    var close = $('#close')
    console.log(button);
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
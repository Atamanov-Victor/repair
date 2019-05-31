var button = document.querySelector('#button')
var modal = document.querySelector('#modal')
var close = document.querySelector('#close') 

button.addEventListener('click', function(){
    // console.log(modal.classList)
    modal.classList.add('modal_active')
    // console.log(modal.classList)
    var leave = setTimeout(function(){
        modal.classList.remove('modal_active')
        clearTimeout(leave);
     }, 5000) 
})

close.addEventListener('click', function(){
    modal.classList.remove('modal_active')
})

$(document).ready(function(){
    $(".phone").mask("+7 (999) 999-9999")
    $('#brif-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            phone: {
                required: true
            },
            email: {
                required: true
            }
            
        },
        messages: {
            name: {
                required: "Введите своё имя",
                minlength: jQuery.validator.format("Имя должно содержать как минимум {0} символа"),
                maxlength: "Имя слишком длинное!"
            },
            phone: {
                required: "Введите свой телефон"
            },
            email: {
                required: "Введите свой email"
            }
        },
        errorClass: "invalid",
        errorElement: "div"
        
    })
})
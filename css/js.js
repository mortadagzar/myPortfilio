
$(document).ready(function() {
   
    


    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) { // this refers to window
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(".fourth").offset().top
            }, 1000);
            clearTimeout(timeout);


        }
    });
















});
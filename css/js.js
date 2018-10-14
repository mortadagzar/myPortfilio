$(document).ready(function(){
    
     
    $(window).scroll(function(){
        if($(this).scrollTop()<=666)
        {
            
            $( "#cog1" ).animate({
               
                borderWidth:'45px',
              }, 600);

        }
   





    var scroll=$(window).scrollTop();
    console.log(scroll);
    var $cog=$('.cog1');
    $cog.css({'top':'scroll'});
    if($(this).scrollTop()>=666 & $(this).scrollTop() <=1336)
    {$('.fa-github').css({'color':'#243949'});
    $('.fa-envelope').css({'color':'#243949'});
    $('.fa-cog').css({'color':'#243949'});
    }else{$('.fa-github').css({'color':'white'});
    $('.fa-envelope').css({'color':'white'});
    $('.fa-cog').css({'color':'white'});}  });
       
          
         
     
    

    $(".container").delay(800).animate({
       top:'23%',
        opacity:'1',
 
    });



      
 });

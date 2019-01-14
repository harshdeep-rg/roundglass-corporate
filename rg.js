$(".prelude-content").ready(
    function hideLoader(){

        setTimeout(function(){
            $(".loader-gif, .ml3").addClass("visiblility-visible-div");
          }, 0);

        //loader screen slideup animation and change display to none
        setTimeout(function(){
          $(".loader-gif").addClass("disappear-loader");
        }, 4500);

        setTimeout(function(){
          $(".ml3").addClass("disappear-loader");
        }, 4500);

        setTimeout(function(){
            $(".loader-gif, .ml3").removeClass("visiblility-visible-div");
          }, 5500);

        setTimeout(function(){
          $(".ml3").addClass("display-none");
        }, 5500);

        setTimeout(function(){
          $(".loader-gif").addClass("display-none");
        }, 5500);
        
        //NOTE :change these numbers if the loading(document.ready is already taking more time)      
    }
);

    $('.landing-section-rg').ready(function() {
        setTimeout(function(){
            $(".prelude").addClass("loader-slide-up");
          }, 5900);
  
          setTimeout(function(){
            $(".prelude").addClass("display-none");
          }, 7900);
  
          //make website content appear
          setTimeout(function(){
            $(".website-content").css('display', 'block');
          }, 5400/* should be 5400 */);
  
          setTimeout(function(){
              $(".cover-image").addClass("zoom-animation");
            }, 6000);
  
            setTimeout(function(){
              $(".cover-image").removeClass("zoom-animation");
            }, 9000);
  
          setTimeout(function(){
              $('.slider').slick({
                  infinite: true,
                  centerMode: true,
                  centerPadding: '16.5%',
                  slidesToShow: 2,
                  speed: 500,
                  mobileFirst:true,
                  responsive: [
                      {
                          breakpoint: 2000,
                            settings: {
                                      slidesToShow: 4,
                                      slidesToScroll: 1,
                                      }
                      },
                      {
                          breakpoint: 700,
                          settings: {
                                      slidesToShow: 2,
                                      slidesToScroll: 1
                                    }
                      },
                      
                      {
                          breakpoint: 200,
                          settings: {
                                      slidesToShow: 1,
                                      slidesToScroll: 1,
                                      centerPadding: '14%',
                                    }
                      }       
                  ]
      
                 
              });
      
            }, 5400/* should be 5400 */);
  
            setTimeout(function(){
              new WOW().init();
      
                 
             
      
            }, 5400/* should be 5400 */);
        
        $(".navbar a").hover(function() {
            $(this).css("opacity", 1).siblings().stop().animate({
                opacity: 0.5
            }, 300);
        
        
        }, function() {
        
            $("a, .dropdown").css("opacity", 1).stop().animate({
                opacity: 1
            }, 300);
        
        });

        $(".navbar .dropdown").hover(function() {
            $(this).css("opacity", 1).siblings().stop().animate({
                opacity: 0.5
            }, 300);

            
        
        
        }, function() {
        
            $(" a, .dropdown").css("opacity", 1).stop().animate({
                opacity: 1
            }, 300);
        
        });

      
    






        $('.cover-image').paroller();

        

        $(document).ready(function(){
            $('.carousel').slick({
                speed: 600,
                slidesToShow: 1,
                centerPaddingLeft:'16.5%',
                centerMode: true,
                variableWidth: true,
                touchThreshold: 10
                   
            });               
        });
        
        
    $('.round').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('.arrow').toggleClass('bounceAlpha');
    });
    //display none also takes 1 sec

    // do not change
    var animation_time=200;
    var animation_time_2=300;
    var animation_time_3=500;

    // think breath text appears initially with 0.6s delay
    $('#think-breath').css('display', 'block'); 
              

    $('#think-breath-h1,#think-breath-h3').addClass('text-entry-class');
  

    $('#control-1').click( function(){
           $("#img-1").animate({
              opacity: '1',
            }, { duration: animation_time_2},{specialEasing:"easeInOut"});

            $("#img-2, #img-3").animate({
                opacity: '0'
            }, { duration: animation_time},{specialEasing:"easeInOut"});

            $(".yellow-line-container").animate({
                marginLeft:'0%'
            }, { duration: animation_time_3},{specialEasing:"easeInOut"}); 

            $('#think-breath').css('display', 'block'); 

            $('.think-breath-h1,.think-breath-h3').addClass("text-entry-class");
            $('.think-breath-h1,.think-breath-h3').removeClass("text-exit-class");
            
              

            $(".the-unshakable-h1,.forest-bathing-h1,.the-unshakable-h3, .forest-bathing-h3").removeClass('text-entry-class');
            $(".the-unshakable-h1,.forest-bathing-h1,.the-unshakable-h3, .forest-bathing-h3").addClass('text-exit-class');
            $('#the-unshakable, #forest-bathing')
              .delay(490)
              .queue(function (next) { 
                $(this).css('display', 'none'); 
                next(); 
            });

            
            
    });


    $('#control-2').click( function(){

           $("#img-1, #img-3").animate({
              opacity: '0',
            }, { duration: animation_time},{specialEasing:"easeInOut"});

            $("#img-2").animate({
                opacity: '1'
            }, { duration: animation_time_2},{specialEasing:"easeInOut"});
                 
            $(".yellow-line-container").animate({
                marginLeft:'29%'
            }, { duration: animation_time_3},{specialEasing:"easeInOut"}); 

             
            $('#the-unshakable').css('display', 'block'); 


            $('.the-unshakable-h1,.the-unshakable-h3').removeClass("text-exit-class");
            $('.the-unshakable-h1,.the-unshakable-h3').addClass("text-entry-class"); 

            $(".think-breath-h1, .forest-bathing-h1,.think-breath-h3, .forest-bathing-h3").removeClass('text-entry-class');
            $(".think-breath-h1, .forest-bathing-h1,.think-breath-h3, .forest-bathing-h3").addClass('text-exit-class');
            $('#think-breath, #forest-bathing')
              .delay(490)
              .queue(function (next) { 
                $(this).css('display', 'none'); 
                next(); 
            });

            
            

    });

    $('#control-3').click( function(){
          
           $("#img-1, #img-2").animate({
              opacity: '0',
            }, { duration: animation_time},{specialEasing:"easeInOut"});

            $("#img-3").animate({
                opacity: '1'
            }, { duration: animation_time_2},{specialEasing:"easeInOut"});  

            $(".yellow-line-container").animate({
                marginLeft:'58%'
            }, { duration: animation_time_3},{specialEasing:"easeInOut"});   

           $('#forest-bathing').css('display', 'block'); 


            $('.forest-bathing-h1,.forest-bathing-h3').removeClass("text-exit-class");
            $('.forest-bathing-h1,.forest-bathing-h3').addClass("text-entry-class"); 

            $(".think-breath-h1, .the-unshakable-h1,.think-breath-h3, .the-unshakable-h3").removeClass('text-entry-class');
            $(".think-breath-h1, .the-unshakable-h1,.think-breath-h3, .the-unshakable-h3").addClass('text-exit-class');
            $('#think-breath, #the-unshakable')
              .delay(490)
              .queue(function (next) { 
                $(this).css('display', 'none'); 
                next(); 
            });  
            
            
           
    });

      

    
$(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 600) {
            $(".navbar").css("opacity", "1");
            $(".navbar").css("background", "white");
            $(".navbar").css("border-bottom", "1px solid");
            $(".navbar").css("border-color", "rgba(237, 237, 237, 1)");
            $(".navbar a").css("color", "#2d2d2d");
            $(".dropbtn").css("color", "#2d2d2d");
            $(".dropdown-content a").css("color", "#2d2d2d");
            $(".roundglass-logo").css("content", "url(https://res.cloudinary.com/rgcorporate/image/upload/v1547111040/logo-dark.svg)");
           
        } 

        else if (scroll < 600 && scroll >50) {
            $(".navbar").css("opacity", "0");
            
            $(".navbar").css("background", "");
            $(".navbar").css("border-bottom", "none");
            $(".navbar").css("border-color", "rgba(237, 237, 237, 0)");
            $(".navbar a").css("color", "white");
            $(".dropbtn").css("color", "white");
            $(".dropdown-content a").css("color", "#2d2d2d");
            $(".roundglass-logo").css("content", "url(https://res.cloudinary.com/rgcorporate/image/upload/v1547111431/logo-light.svg)");
           
        } 

       else {
        $(".navbar").css("opacity", "1");
            
            $(".navbar").css("background", "");
            $(".navbar").css("border-bottom", "none");
            $(".navbar").css("border-color", "rgba(237, 237, 237, 0)");
            $(".navbar a").css("color", "white");
            $(".dropbtn").css("color", "white");
            $(".dropdown-content a").css("color", "#2d2d2d");
            $(".roundglass-logo").css("content", "url(https://res.cloudinary.com/rgcorporate/image/upload/v1547111431/logo-light.svg)");
        }
    });



   
// end of function
});




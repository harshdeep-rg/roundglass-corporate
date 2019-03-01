
$('.landing-section-rg').ready(function() {
    // Navbar scroll behaviour
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
            $(".bar1").css("background-color", "#2d2d2d");
            $(".bar2").css("background-color", "#2d2d2d");
            $(".bar3").css("background-color", "#2d2d2d");
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
            $(".bar1").css("background-color", "white");
            $(".bar2").css("background-color", "white");
            $(".bar3").css("background-color", "white");
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
            $(".bar1").css("background-color", "white");
            $(".bar2").css("background-color", "white");
            $(".bar3").css("background-color", "white");
        }
    });
    
    // show hamburger on mobile
    $('.hamburger-menu').click(function(){
        $('.menu-small-screen').css("right", "0");
     });
     $('.close-icon').click(function(){
        $('.menu-small-screen').css("right", "-100%");
     });
     
    // Activate slick slider in video-tile and small screen cover section
    $('.carousel').slick({
        speed: 600,
        slidesToShow: 1,
        centerPaddingLeft:'16.5%',
        centerMode: true,
        variableWidth: true,
        touchThreshold: 10      
    });  

    $('.slider').slick({
        centerMode: true,
        centerPadding: '17%',
        autoplay: false,
        arrows: false,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 2200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '16%',
                    slidesToShow: 2,
                    infinite: true
                    
                }
            },
            {
                breakpoint: 1540,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10%',
                    slidesToShow: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '8%',
                    slidesToShow: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '17%',
                    slidesToShow: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '7%',
                    slidesToShow: 1,
                    infinite: true
                }
            }
        ]
    });

    new WOW().init();
    $(".cover-image").paroller();

    // See more chevron animation on hover
    $('.round').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.arrow').toggleClass('bounceAlpha');
    });
      
    //On page load, reveal Think breath text animation
    $('.think-breath-h1,.think-breath-h3').addClass('text-exit-class');
    setTimeout(function() {
        $('#think-breath').css('display', 'block'); 
        $('.think-breath-h1,.think-breath-h3').removeClass('text-exit-class');
        $('.think-breath-h1,.think-breath-h3').addClass('text-entry-class');
    }, 1000);
    
    // autoplay function for cover section in desktop
    var myVar, myVar1, myVar2, myVar3; 
    function myTimer() {
        var margLeft = parseInt($(".yellow-line-container").css("margin-left")); 
        var parentwidth = parseInt($(".indicator").css("width")); 

        var inperc = (margLeft*100)/parentwidth;

        if(inperc == 0){
            $('#control-2').trigger("click");
        }

        else if(inperc > 0 && inperc <56){
            $('#control-3').trigger("click");
        }

        else{
            $('#control-1').trigger("click");
        }
    }
    myVar = setInterval(myTimer, 5000);

    // Variables for tab functions
    var animation_time=200;
    var animation_time_2=300;
    var animation_time_3=500;

    // Tab-1-Think Breath click behaviour
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

        // Disable click event for 1 second on other article tabs
        $('#control-2').css("pointer-events", "none");
        $('#control-3').css("pointer-events", "none");
        setTimeout(function(){
            $('#control-2').css("pointer-events", "auto");
            $('#control-3').css("pointer-events", "auto");
        },1500);

        clearInterval(myVar);
        clearInterval(myVar2);
        clearInterval(myVar3);
        myVar1 = setInterval(myTimer, 5000);

    });

    // Tab-2-The Unshakable click behaviour
    $('#control-2').click( function(){
        $("#img-1, #img-3").animate({
            opacity: '0',
        }, { duration: animation_time},{specialEasing:"easeInOut"});

        $("#img-2").animate({
            opacity: '1'
        }, { duration: animation_time_2},{specialEasing:"easeInOut"});
                
        $(".yellow-line-container").animate({
            marginLeft:'28.3%'
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

        // Disable click event for 1 second on other article tabs
        $('#control-1').css("pointer-events", "none");
        $('#control-3').css("pointer-events", "none");
        setTimeout(function(){
            $('#control-1').css("pointer-events", "auto");
            $('#control-3').css("pointer-events", "auto");
        },1500); 

        clearInterval(myVar);
        clearInterval(myVar1);
        clearInterval(myVar3);
         myVar2 = setInterval(myTimer, 5000);

    });

    // Tab-3-Forest Bathing click behaviour
    $('#control-3').click( function(){
        $("#img-1, #img-2").animate({
            opacity: '0',
        }, { duration: animation_time},{specialEasing:"easeInOut"});

        $("#img-3").animate({
            opacity: '1'
        }, { duration: animation_time_2},{specialEasing:"easeInOut"});  

        $(".yellow-line-container").animate({
            marginLeft:'56.3%'
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
        
        // Disable click event for 1 second on other article tabs
        $('#control-2').css("pointer-events", "none");
        $('#control-1').css("pointer-events", "none");
        setTimeout(function(){
            $('#control-2').css("pointer-events", "auto");
            $('#control-1').css("pointer-events", "auto");
        },1500); 

        clearInterval(myVar);
        clearInterval(myVar2);
        clearInterval(myVar1);
        myVar3 = setInterval(myTimer, 5000);
    });

    jQuery(function($) {
        var $targets = $('.accordion');
        $targets.on('touchstart click tap', function() {
            console.log('something happened');
            var $panel= $(this).next();
            var $panel2= $panel.next();
           

            var tempo = parseInt($panel2.css('max-height'));
           
            if (tempo){
                $panel2.css('max-height', '0px'); 
            } 
            
            else {
                var scrollheight = $panel2.prop('scrollHeight') + "px";
                $panel2.css('max-height', scrollheight); 
            } 
        });

    });

// end of Javascript

});

$('#img-1').ready(function() {
    $('.cover-image').addClass('visible-opacity');
    
    setTimeout(function() {
        $(".cover-image").addClass("zoom-animation"),
        $(this).fadeIn(1000);
    }, 0);
    setTimeout(function() {
        $(".cover-image").removeClass("zoom-animation")
    }, 2500);
});



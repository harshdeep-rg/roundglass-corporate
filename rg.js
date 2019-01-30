

$(".prelude-content").ready(function hideLoader(){
    /*
    // Loader content visible
    setTimeout(function(){
        $(".loader-gif, .ml3").addClass("visiblility-visible-div");
    }, 0);

    // Loader fadeOut animation
    setTimeout(function(){
    $(".loader-gif").addClass("disappear-loader");
    }, 4400);

    setTimeout(function(){
    $(".ml3").addClass("disappear-loader");
    }, 4400);

    setTimeout(function(){
        $(".loader-gif, .ml3").removeClass("visiblility-visible-div");
    }, 5400);

    // Hide Loader content
    setTimeout(function(){
    $(".ml3").addClass("display-none");
    }, 5400);

    setTimeout(function(){
    $(".loader-gif").addClass("display-none");
    }, 5500);


    $('.forest-bathing-h1,.forest-bathing-h3').removeClass("text-exit-class");
    $('.forest-bathing-h1,.forest-bathing-h3').addClass("text-entry-class ");
    */

    /* ********************* NOTE *********************
    For the returning user, simple slide up animation */

    setTimeout(function(){
        $(".loader-repeat-image").addClass("text-entry-class-loader");
    }, 0);


    setTimeout(function(){
        $(".loader-repeat-image").removeClass("text-entry-class-loader");
        $(".loader-repeat-image").addClass("text-exit-class-loader");
    }, 1500);
    setTimeout(function(){
        $(".loader-repeat-image").addClass("display-none");
    }, 2000);

    
});

$('.landing-section-rg').ready(function() {

    /* UNCOMMENT TO VIEW FULL LOADER

    // Loader slideUp animation 
    setTimeout(function(){
        $(".prelude").addClass("loader-slide-up");
    }, 5600);

    setTimeout(function(){
        $(".prelude").addClass("display-none");
    }, 7600);

    // Website content reveal
    setTimeout(function(){
        $(".website-content").css('display', 'block');
    }, 5400);

    // Cover image zoom out animation
    setTimeout(function(){
        $(".cover-image").addClass("zoom-animation");
    }, 5200);

    setTimeout(function(){
        $(".cover-image").removeClass("zoom-animation");
    }, 9000);
    */

    /* ********************* NOTE *********************
    For the returning user, simple slide up animation */
    setTimeout(function(){
        $(".prelude").addClass("loader-slide-up");
    }, 2000);

    setTimeout(function(){
        $(".prelude").addClass("display-none");
    }, 4000);

    // Website content reveal
    setTimeout(function(){
        $(".website-content").css('display', 'block');
        $('.cover-image').paroller();
    },1800);

    // Cover image zoom out animation
    setTimeout(function(){
        $(".cover-image").addClass("zoom-animation");
    }, 1800);

    setTimeout(function(){
        $(".cover-image").removeClass("zoom-animation");
    }, 4800);


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

    /* TIME VALUSE FOR FULL LOADER IS 5400 AND FOR SMALL LOADER IS 2000 */
    $('.carousel').slick({
        speed: 600,
        slidesToShow: 1,
        centerPaddingLeft:'16.5%',
        centerMode: true,
        variableWidth: true,
        touchThreshold: 10      
    });  

    setTimeout(function(){
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
    }, 2000 /* 5400 for full loader */); 

    // Activate scroll animation
    setTimeout(function(){
        new WOW().init();
    }, 2000 /* 5400 for full loader */);

    // See more chevron animation on hover
    $('.round').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.arrow').toggleClass('bounceAlpha');
    });
      
    //On page load, reveal Think breath text animation
    $('#think-breath').css('display', 'block'); 
    $('#think-breath-h1,#think-breath-h3').addClass('text-entry-class');

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
    });
// end of Javascript
});


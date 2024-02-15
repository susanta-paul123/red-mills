(function ($) {
    'use strict';
    var a = 0;
    $(window).scroll(function(){
        
        var sticky = $('header'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 250) sticky.addClass('sticky-nav');
        else sticky.removeClass('sticky-nav');

        //counter

        var oTop = $(".counter-box").offset().top - window.innerHeight;

        console.log(oTop)
        if (a == 0 && $(window).scrollTop() > oTop) {

 
        $(".counter").each(function () {
            
            var $this = $(this),
            countTo = $this.attr("data-number");
        $({
            countNum: $this.text()
        }).animate(
            {
                countNum: countTo
            },

            {
                duration: 850,
                easing: "swing",
                step: function () {
                    $this.text(
                        Math.ceil(this.countNum).toLocaleString("en")
                    );
                },
                complete: function () {
                    $this.text(
                        Math.ceil(this.countNum).toLocaleString("en")
                    );

                    $this.addClass('zoom-text')
                }
            }
        );
    });
    
    a = 1;
}
        
});


    jQuery(document).ready(function ($) {
        $('.carousel').carousel({
            interval: 3000
        })   

        function videoTrigger() {
            var trigger = $('.video-trigger');
            if (!trigger.length) return;
            trigger.fancybox();
        }
        videoTrigger();

        AOS.init({
            once: true,
        });

        // $('.sec-banner .owl-carousel').owlCarousel({
        //     items: 3,
        //     loop: true,
        //     autoplay: true,
        //     animateIn: 'animate__fadeIn',
        //     animateOut: 'animate__fadeOut',
        //     margin: 10,
        //     autoplayTimeout: 6000,
        //     autoplaySpeed: 1500,
        //     smartSpeed: 1500,
        //     responsiveClass: true,
        //     dots: false,
        //     autoplayHoverPause: true,
        //     nav: true,
        //     items: 1,
        //     navText: ["<i class='fal fa-arrow-left'></i>", "<i class='fal fa-arrow-right'></i>"],
        // });

        $('.our-brand .owl-carousel').owlCarousel({
            items: 1,
            loop: false,
            autoplay: false,
            margin: 0,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            autoplayHoverPause: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });

        $('.news-center .owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.community-support .owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


        $('.our-gallery .owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.image-gallery .owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: true,
            autoplayHoverPause: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.our-video .owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            responsiveClass: true,
            dots: false,
            autoplayHoverPause: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });
        
        

        // $('.sec-tech .owl-carousel').owlCarousel({
        //     items: 2,
        //     // loop: true,
        //     autoplay: true,
        //     margin: 20,
        //     autoplayTimeout: 6000,
        //     autoplaySpeed: 1500,
        //     smartSpeed: 1500,
        //     responsiveClass: true,
        //     dots: false,
        //     autoplayHoverPause: true,
        //     nav: true,
        //     navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
        //     responsive: {
        //         0: {
        //             items: 1,
        //         },
        //         768: {
        //             items: 2
        //         },
        //         1000: {
        //             items: 2
        //         }
        //     }
        // });

        // $('.sec-delivered .owl-carousel').owlCarousel({
        //     // loop: true,
        //     autoplay: true,
        //     stagePadding: 50,
        //     margin: 20,
        //     autoplayTimeout: 6000,
        //     autoplaySpeed: 1500,
        //     smartSpeed: 1500,
        //     responsiveClass: true,
        //     dots: true,
        //     nav: false,
        //     autoplayHoverPause:true,
        //     responsive: {
        //         0: {
        //             items: 1,
        //         },
        //         768: {
        //             items: 3
        //         },
        //         1000: {
        //             items: 4
        //         }
        //     }
        // });

        // $('.sec-casestudy .owl-carousel').owlCarousel({
        //     items: 3,
        //     // loop: true,
        //     autoplay: true,
        //     margin: 10,
        //     autoplayTimeout: 6000,
        //     autoplaySpeed: 1500,
        //     smartSpeed: 1500,
        //     responsiveClass: true,
        //     dots: false,
        //     autoplayHoverPause: true,
        //     nav: true,
        //     navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
        //     responsive: {
        //         0: {
        //             items: 1,
        //         },
        //         768: {
        //             items: 2
        //         },
        //         1000: {
        //             items: 3
        //         }
        //     }
        // });

        // $('.sec-news .owl-carousel').owlCarousel({
        //     items: 3,
        //     // loop: true,
        //     autoplay: true,
        //     margin: 10,
        //     autoplayTimeout: 6000,
        //     autoplaySpeed: 1500,
        //     smartSpeed: 1500,
        //     responsiveClass: true,
        //     dots: false,
        //     autoplayHoverPause: true,
        //     nav: true,
        //     navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
        //     responsive: {
        //         0: {
        //             items: 1,
        //         },
        //         768: {
        //             items: 2
        //         },
        //         1000: {
        //             items: 3
        //         }
        //     }
        // });

        //Resource Areas
            $('.content-panel').hide();
            $('.content-panel').eq(0).show();
            $('.raa_tab').eq(0).addClass('active');

            $('.raa_tab').click(function(){
                $(this).parent('.galleryFilterAccordion').siblings('.galleryFilterAccordion').children('.content-panel').slideUp();
            $(this).siblings('.raa_tab').next().slideUp();
            $(this).parent('.galleryFilterAccordion').siblings('.galleryFilterAccordion').children('.raa_tab').removeClass('active');
            $(this).toggleClass('active');
            $(this).next('.content-panel').slideToggle();
            });

            function float() {
                var group = $('[data-floating-group]');
              
                group.each(function() {
                  var that = $(this),
                      input = that.find('[data-floating-input]');
                  
                  input.on('focus', function(){
                    that.addClass('label-up focus');
                  });
                  
                  input.on('blur', function() {
                    
                    that.removeClass('focus');
                    if(!$(this).val()) {
                      that.removeClass('label-up');
                    }
                  });
                      
                });
              }
              
              float();

                            //
                $("#phone").intlTelInput({});


                $("#phone").val('')
//
                $(".scroll-down").click(function() {
                    $('html, body').animate({
                        scrollTop: $(".scroll-down").offset().top
                    }, 100);
                });

               

});
}(jQuery));
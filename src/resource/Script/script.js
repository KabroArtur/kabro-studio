import jQuery from 'jquery';


    slideFaq();
    scrollTop();

    window.onscroll = function scrollFunction(){
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 400) {
            jQuery(".clb-scroll-top").addClass("active");
        } else {
            jQuery(".clb-scroll-top").removeClass("active");
        }
    }

        function scrollTop(){
            jQuery('.clb-scroll-top').onClick(function(){
                jQuery("html, body").animate({scrollTop: 0}, 1000);
            });
        }

    //faq list
    function slideFaq(){
        jQuery('.item_question .title_question').click(function(){
            var toggle = jQuery(this).next('div.answer_faq');
            jQuery(toggle).slideToggle("medium");
        });
        jQuery('.inactive').onClick(function(){
            jQuery(this).toggleClass('inactive actived');
        });
        }


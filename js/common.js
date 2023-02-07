
(function($) {
     $(document).ready(documentReadyFunction);
    $(window).resize(windowResizeFunction);
    $(window).scroll(windowScrollFunction);

    function documentReadyFunction() {
        // functions for document ready
        HeaderFixed();
        BtnTop();
        StickySidebar();
        Isotope();
        NavbarClose();
    }

    function windowResizeFunction() {
        // functions for window resize
        IsotopeReLayout();
    }
    function windowScrollFunction() {
        // functions for window resize
        HeaderFixed();
        BtnTop();
    }


    function HeaderFixed() {//header置頂換樣式        
        var $header = $(".navbar");
        var scroll = $(window).scrollTop();
        if (scroll >=50) {
            $header.addClass("scrolled");
        } else {
            $header.removeClass("scrolled");
        }
}

    function BtnTop() {// jQuery 平滑回到顶端链接       
       if ($(this).scrollTop() > 100) {
            $('.btntop').fadeIn();
        } else {
            $('.btntop').fadeOut();
        }
        $('.btntop').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    }
    function StickySidebar() {
            //側欄固定
        $('.project-info').theiaStickySidebar({
          // Settings
          additionalMarginTop: 85
        });
    }

    function NavbarClose() {
        if($(window).width()<992){ //當視窗小於480時才運作
        $('.navbar-nav a').on('click', function(){
            $('.navbar-toggler').click();
          });
    }
}
    function Isotope() {
        // init Isotope
        var $container = $('#isotope-list'); //The ID for the list with all the blog posts
        $container.isotope({ //Isotope options, 'item' matches the class in the PHP
            itemSelector : '.work-item', 
            layoutMode : 'masonry'
        });
     
        //Add the class selected to the item that is clicked, and remove from the others
        var $optionSets = $('#filters'),
        $optionLinks = $optionSets.find('button');
     
        $optionLinks.click(function(){
            var $this = $(this);
            // don't proceed if already selected
            if ( $this.hasClass('selected') ) {
              return false;
            }
            var $optionSet = $this.parents('#filters');
            $optionSets.find('.selected').removeClass('selected');
            $this.addClass('selected');
         
            //When an item is clicked, sort the items.
             var selector = $(this).attr('data-filter');
            $container.isotope({ filter: selector });
         
            return false;
        });
    }

    // flatten object by concatting values
    function concatValues( obj ) {
      var value = '';
      for ( var prop in obj ) {
        value += obj[ prop ];
      }
      return value;
    }

    function IsotopeReLayout() {
        $('#isotope-list').isotope('reLayout'); 
    }

})(jQuery);  
    

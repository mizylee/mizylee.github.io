//header置頂換樣式
JQuery(function() {
    var header = $(".navbar");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >=50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });    
});

// jQuery 平滑回到顶端链接
JQuery(document).ready(function () {

//側欄固定

    $('.project-info').theiaStickySidebar({
      // Settings
      additionalMarginTop: 85
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.btntop').fadeIn();
        } else {
            $('.btntop').fadeOut();
        }
    });

    $('.btntop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

$(function() {

	// Custom JS
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:1,
            loop:true,
            margin:0,
            autoplay:true,
            autoplayTimeout:10000,
            autoplayHoverPause:true
        });

      });

      $('.top-line').after('<div class="mobile-menu d-lg-none">');
      $('.top-menu').clone().appendTo('.mobile-menu');
      $('.mobile-menu-button').click(function() {
          $('.mobile-menu').stop().slideToggle();
      });

      var $page = $('html, body');
      $('a[href*="#"]').click(function() {
          $page.animate({
              scrollTop: $($.attr(this, 'href')).offset().top
          }, 1000);
          return false;
      });



});


    (function(){ var widget_id = 'zn1XbmAxrT';
    var d=document;var w=window;function l(){var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//code.jivosite.com/script/widget/'+widget_id;
    var ss = document.getElementsByTagName('script')[0];
    ss.parentNode.insertBefore(s, ss);}
    if(d.readyState=='complete'){l();}
    else{if(w.attachEvent){w.attachEvent('onload',l);}
    else{w.addEventListener('load',l,false);
    }}})();
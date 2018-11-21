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
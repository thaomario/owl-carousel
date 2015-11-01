/**
 * @file
 * Initiate Owl Carousel.
 */

(function($) {

  Drupal.behaviors.owlcarousel = {
    attach: function(context, settings) {

      for (var carousel in settings.owlcarousel) {
        // Carousel instance.
        var owl = $('#' + carousel);

        // lazyLoad support.
        if (settings.owlcarousel[carousel].settings.lazyLoad) {
          var images = owl.find('img');

          $.each(images, function(i, image) {
            $(image).attr('data-src', $(image).attr('src'));
          });

          images.addClass('owl-lazy');
        }

        // Attach instance settings.
        if (!owl.hasClass('disabled')) {
          owl.owlCarousel(settings.owlcarousel[carousel].settings);
        }
      }
    }
  };

}(jQuery));

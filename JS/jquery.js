(function ($) {
  $.fn.imageSlider = function (options) {
    var settings = $.extend(
      {
        speed: 1000,
        interval: 6000,
      },
      options
    );

    var $previousButton = $('<button class="previous">Previous</button>');
    var $nextButton = $('<button class="next">Next</button>');
    this.append($previousButton).append($nextButton);

    var $slider = this;
    var $slides = $slider.find(".slide");
    var currentIndex = 0;
    var interval;

    $slides.eq(currentIndex).show();
    startInterval();

    function startInterval() {
      interval = setInterval(function () {
        $nextButton.click();
      }, settings.interval);
    }

    function stopInterval() {
      clearInterval(interval);
    }

    $previousButton.click(function () {
      stopInterval();
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = $slides.length - 1;
      }
      $slides.hide();
      $slides.eq(currentIndex).show();
      startInterval();
    });

    $nextButton.click(function () {
      stopInterval();
      currentIndex++;
      if (currentIndex >= $slides.length) {
        currentIndex = 0;
      }
      $slides.hide();
      $slides.eq(currentIndex).show();
      startInterval();
    });

    return this;
  };
})(jQuery);

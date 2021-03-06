/*!
 * jQuery captureKeys 1.0
 * http://www.karalamalar.net/
 *
 * Copyright (c) 2011 İzzet Emre Erkan
 * Licensed under Creative Commons Attribution-Share Alike 3.0 Unported License
 * http://creativecommons.org/licenses/by-sa/3.0/
 *
 */
(function ($) {
  var inputField,
    documentKeydown = function (event) {
      var target = event.target, tagName = target.tagName.toLowerCase();
      if (target !== inputField.get(0)) {
        if (tagName === 'input' || tagName === 'textarea') {
          return true;
        }
        target = inputField.get(0);
        inputField.focus();
      }
    };
  $.fn.captureKeys = function () {
    return this.each(function (i) {
      if (i === 0) {
        inputField = $(this);
        $(document).bind('keydown', documentKeydown);
        inputField
          .focus(function () {
            $(document).unbind('keydown');
          })
          .blur(function () {
            $(document).bind('keydown', documentKeydown);
          });
      }
    });
  };
})(jQuery);
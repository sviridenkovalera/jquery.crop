(function ($) {
    "use strict";

    $.fn.crop = function (options) {
        var image = $('img').clone(),
            parent = $('<div>'),
            left = Math.floor(options.left) || 0,
            top = Math.floor(options.top) || 0,
            width = Math.floor(options.width) || Math.floor(image.width()),
            height = Math.floor(options.height) || Math.floor(image.height());

        parent.css('overflow', 'hidden');
        parent.css('width', width + "px");
        parent.css('height', height + "px");
        parent.css('display', "inline-block");
        image.appendTo(parent);
        $(this).before(parent);
        $(this).remove();

        image.css('left', -left + "px");
        image.css('top', -top + "px");
        image.css('position', 'relative');
        return image;
    };

}(jQuery));
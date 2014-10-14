(function ($) {
    "use strict";

    $.fn.crop = function (options) {
        var image = $(this),
            parent = $('<div>'),
            insertParent = image.parent(),
            left = Math.floor(options.left) || 0,
            top = Math.floor(options.top) || 0,
            width = Math.floor(options.width) || Math.floor(image.width()),
            height = Math.floor(options.height) || Math.floor(image.height());

        image.remove();
        image.css('left', -left + "px");
        image.css('top', -top + "px");
        image.css('position', 'relative');
        parent.css('overflow', 'hidden');
        parent.css('width', width + "px");
        parent.css('height', height + "px");
        image.appendTo(parent);
        parent.appendTo(insertParent);
        return image;
    };

}(jQuery));
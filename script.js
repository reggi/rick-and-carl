$(document).ready(function() {
    $(".background").backstretch('./both.jpg');
    $(".head").backstretch("./head.png");
    $(".head").draggable({
        drag: function(event, ui) {
            var position = $(".ui-draggable-dragging").position();
            pointer = $('<div>').addClass("head-new").backstretch("./head.png");
            $(document.body).append(pointer);
            pointer.css({
                "position": 'absolute',
                "top": position.top,
                "left": position.left
            });
        }
    });
});
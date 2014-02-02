$(document).ready(function() {
    $(".head").draggable({
        //helper: "clone",
        drag: function(event, ui) {
            var position = $(".ui-draggable-dragging").position();
            pointer = $('<img>').attr({
                'src': './ricks-head.png'
            });
            $(document.body).append(pointer);
            pointer.css({
                "position": 'absolute',
                "top": position.top,
                "left": position.left
            });
        }
    });
});
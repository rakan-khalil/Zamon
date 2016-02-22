"use strict";

$(function() {
    var value = 0;
    var $block = $('.shape-wrapper');


    $(document).mousemove( function(e) {
        $block.css({
            "transform": "rotateX(" + e.pageY / 20 + "deg) rotateY(" + e.pageX / 20 + "deg)"
        });
    });

    $('.piruet').click(function() {
        $block.addClass('clicked');
        $block.css({
            "transform": "rotateZ(-280deg) rotateY(360deg) rotateX(360deg)"
        });

        setTimeout(function() {
            $block.removeClass('clicked')
        }, 2000);
    });



});;

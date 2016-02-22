"use strict";

$(function() {
    var docWidth = $(document).width() / 2;
    var docHeight = $(document).height() / 2;
    var itemSize = 100 / 20;
    var $block = $('.shape-wrapper');



    $(document).mousemove( function(e) {
        console.log('X ' + e.pageY);
        console.log('Y ' + e.pageX);

        $block.css({
            "transform": "rotateX(" + ((e.pageY - docHeight) / 10) + "deg) rotateY(" + ((e.pageX - docWidth) / 10 + itemSize) + "deg)"
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

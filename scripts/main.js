"use strict";

$(function() {
    var value = 0;
    var $block = $('.shape-wrapper > .triangle');

    setInterval(function() {
        //console.log(value);
        value++

        $block.css({
            //"transform": "rotateX(" + value + "deg)"
        });

    }, 30)



});;

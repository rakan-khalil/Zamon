"use strict";

$(function() {

    // слайдер плиточного элемента
    // работает если все пункты одинаковой ширины
    var tileSlider = $('.tiles.slider'),
        tileSliderList = tileSlider.children('ul'),
        tileSliderItem = tileSlider.find('li'),
        tileSliderLastItemWidth = tileSliderItem.eq(tileSliderItem.length - 1).outerWidth(true),
        tileSliderPrev = tileSlider.find('.prev'),
        tileSliderNext = tileSlider.find('.next'),
        tileSliderListWidth = 0,
        tileSliderPosition = 0;

    // считаем ширину всех пунктов
    for(var index = 0; index < tileSliderItem.length; index++) {
        tileSliderListWidth += tileSliderItem.eq(index).outerWidth(true);
    }

    tileSliderList.width(tileSliderListWidth);

    // если нажали next
    tileSliderNext.click( function() {
        if(!$(this).hasClass('disabled')) {
            tileSliderPosition -= tileSliderLastItemWidth;
            tileSliderList.css({'left': tileSliderPosition});
            setButsStatus();
        }
    });

    // если нажали prev
    tileSliderPrev.click( function() {
        if(!$(this).hasClass('disabled')) {
            tileSliderPosition += tileSliderLastItemWidth;
            tileSliderList.css({'left': tileSliderPosition});
            setButsStatus();
        }
    });

    function setButsStatus() {
        // проверяем возможность прокрутки влево
        if (tileSliderPosition < 0) {
            tileSliderPrev.removeClass('disabled');
        } else {
            tileSliderPrev.addClass('disabled');
        }

        // проверяем возможность прокрутки вправо
        if (-tileSlider.width() < tileSliderPosition) {
            tileSliderNext.removeClass('disabled');
        } else {
            tileSliderNext.addClass('disabled');
        }
    }



    // появление подменю при наведение на пункты меню
    // срабатывает только если находит обертку для основного пункта
    $('nav .main-menu > li').hover(
        function() {
            if ($('.sub-menu').eq($(this).index()).length) {
                $('nav').addClass('hovered');

                $(this).addClass('hover');
                $('.sub-menu').eq($(this).index()).show();
            }
        },

        function() {
            $('nav').removeClass('hovered');

            $(this).removeClass('hover');
            $('.sub-menu').eq($(this).index()).hide();
        }
    );

    $('nav .sub-menu').hover(
        function(){
            $('nav').addClass('hovered');

            $('.main-menu li').eq($(this).index() - 1).addClass('hover');
            $(this).show();
        },

        function(){
            $('nav').removeClass('hovered');

            $('.main-menu li').eq($(this).index() - 1).removeClass('hover');
            $(this).hide();
        }
    );

});;

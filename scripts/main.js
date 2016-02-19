"use strict";

$(function() {
    /** Работа с баннерами на главной [[ **/
    /** @TODO допилить пересчет при ресайзе и возможность прокрута через клик **/

    function setBannersHeight() {
        var bannerHeight = $(window).height() - $('header').height() - $('nav').height(),
            $banners = $('.banners'),
            $bannersItem = $banners.children('li');

        // Высота баннера равна высоте странице от которой отнимает высоту шапки и навигации
        $banners.height(bannerHeight);
    }

    setBannersHeight();

    // если изменили размер окна
    $(window).resize(function() {
        setBannersHeight();
    });

    // переключаем слайды
    /*setInterval( function() {

        var currentIndex = $('.banners li.visible').index() + 1;

        if (currentIndex === $bannersItem.length) {
            currentIndex = 0;
        }

        $bannersItem.removeClass('visible');
        $bannersItem.eq(currentIndex).addClass('visible');
    }, 2000);*/

    /** ]] Работа с баннерами на главной **/


    /** Работа со слайдером новостей на главной [[ **/
    /** @TODO допилить возможность клика **/

    runSlider()

    function runSlider() {
        var $slider = $('.small-slider'),
            $sliderItem = $slider.children('li');

        // переключаем слайды
        setInterval( function() {

            var currentIndex = $('.small-slider li.main').index() + 1;
            var currentLi = 1;

            if (currentIndex === $sliderItem.length) {
                currentIndex = 0;
            }

            $sliderItem.removeClass('main');
            $sliderItem.removeClass('left');
            $sliderItem.removeClass('right');
            $sliderItem.eq(currentIndex).addClass('main');

            for (var index = 0; index < $sliderItem.length; index++) {


                if (!$sliderItem.eq(index).hasClass('main')) {
                    if (currentLi > 1) {
                        $sliderItem.eq(index).addClass('right');
                    } else {
                        $sliderItem.eq(index).addClass('left');
                    }

                    currentLi++;
                }
            }
        }, 2000);
    }
    /** ]] Работа со слайдером новостей на главной **/


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

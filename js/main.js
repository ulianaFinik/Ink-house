$(function(){

    $('.tabs__item').on('click', function (e) {
        e.preventDefault();

        $('.tabs__item').removeClass('tabs__item--active');
        $(this).addClass('tabs__item--active');

        $('.tabs__content').removeClass('tabs__content--active');
        $($(this).attr('href')).addClass('tabs__content--active');
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu__btn').toggleClass('active');
    });

    // $('.menu__link--close').on('click', function(){
    //     $('.menu__list').removeClass('menu__list--active');
    // });

});
/**
 * Created by Amir on 3/15/2015.
 */
$(document).ready(function() {
    var side_flag = true;
    if (window.matchMedia('(max-width: 768px)').matches) {
        side_flag = false;
        $('.menu-icon i').removeClass('fa-close');
        $('.menu-icon i').addClass('fa-bars');
        $('.navigation-side').removeClass('open-side');
        $('.navigation-side').addClass('close-side');
        $('.main-content').removeClass('menu-space');
    } else {
        side_flag = true;
        $('.menu-icon i').removeClass('fa-bars');
        $('.menu-icon i').addClass('fa-close');
        $('.navigation-side').removeClass('close-side');
        $('.navigation-side').addClass('open-side');
        $('.main-content').addClass('menu-space');
    }
    $('.menu-icon').click(function(){
        if(side_flag){
            $('.menu-icon i').removeClass('fa-close');
            $('.menu-icon i').addClass('fa-bars');
            $('.navigation-side').removeClass('open-side');
            $('.navigation-side').addClass('close-side');
            $('.main-content').removeClass('menu-space');
            side_flag = false;
        }
        else if(!side_flag){
            $('.menu-icon i').removeClass('fa-bars');
            $('.menu-icon i').addClass('fa-close');
            $('.navigation-side').removeClass('close-side');
            $('.navigation-side').addClass('open-side');
            $('.main-content').addClass('menu-space');
            side_flag = true;
        }
        //$('.menu-icon i').removeClass('fa-bars');
        //$('.menu-icon i').addClass('fa-close');
        //$('.navigation-side').addClass('close-side');

    })

});
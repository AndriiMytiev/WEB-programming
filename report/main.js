$(document).ready(function() {
    $('.tab-nav a').on('click', function(){
        $('.tab-nav a').removeClass('active');
        $(this).addClass('active');

        $(".tab-pane").removeClass("active");
        console.log($(this).attr("href"))
        $($(this).attr("href")).addClass("active");

        return false;
    });

    $('.lab-nav a').on('click', function(){
        $('.lab-nav a').removeClass('active');
        $(this).addClass('active');

        $(".lab-pane").removeClass("active");
        console.log($(this).attr("href"))
        $($(this).attr("href")).addClass("active");

        return false;
    });
});
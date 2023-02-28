$(document).ready(function() {
    $('.tab-nav a').on('click', function(){
        $('.tab-nav a').removeClass('active');
        $(this).addClass('active');

        $(".tab-pane").removeClass("active");
        $($(this).attr("href")).addClass("active");
        return false;
    });

    for (let i = 1; i < 10 ; i++) {
        $(`#lab${i} .lab-nav a`).on('click', function(){
            $(`#lab${i} .lab-nav a`).removeClass('active');
            $(this).addClass('active');

            $(`#lab${i} .lab-pane`).removeClass("active");
            $($(this).attr("href")).addClass("active");
            return false;
        });
    }
});
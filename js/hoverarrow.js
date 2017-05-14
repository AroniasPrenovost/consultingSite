$(document).ready(function () {
    $(".content1").hover(function () {
        $(".arrow1").css("display", "none");
    });
    $(".content1").mouseleave(function () {
        $(".arrow1").css("border", "none");
    });
});
$(document).ready(function () {
    $(".content2").hover(function () {
        $(".arrow2").css("display", "none");
    });
    $(".content3").mouseleave(function () {
        $(".arrow2").css("border", "none");
    });
});



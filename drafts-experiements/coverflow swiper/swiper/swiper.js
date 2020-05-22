$(document).ready(function() {
    // the following is for the images in the slide show
    var img_href = $("#section4 .swiper-container .swiper-slide .img-box").find(
        "img"
    );
    if (img_href.length == 0) {
        img_href = $("#section4 .swiper-container .swiper-slide .img-box").find(
            "img"
        );
    }

    $.each(img_href, function(i, item) {
        $(item).addClass("slide-image");
        $(item).attr("data-target", "#image-modal");
        $(item).attr("data-toggle", "modal");
        $(item).css("cursor", "pointer");
    });
});

// click event for the images in the slide show
$(document).on("click", ".slide-image", function(e) {
    e.preventDefault();
    $("#image-modal .modal-dialog .modal-content .modal-body img").attr(
        "src",
        $(this).attr("src")
    );
    var t = $(this)
        .closest(".swiper-slide")
        .find(".currency-pair")
        .text();
    $("#image-modal .modal-dialog .modal-header h4").text(t);
});
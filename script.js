$(document).on("keydown", function (e) {
    if(e.which == 65) {
        $("#hidden_div").show();
    }
});

$(document).on("keyup", function (e) {
    if(e.which == 65) {
        $("#hidden_div").hide();
    }
});

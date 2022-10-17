$(".button").click(function() {
    if (!$(this).hasClass("not")) {
        if ($("#expression").val() == 0)
            $("#expression").val($(this).val());
        else
            $("#expression").val($("#expression").val() + $(this).val());
    }
});

$("#backspace").click(function() {
    var value = $("#expression").val();
    if (!(parseInt(parseFloat(value)) == 0 && value.length == 1))
        $("#expression").val(value.slice(0, value.length - 1));
    if (value.length == 1)
        $("#expression").val("0");
});

$("#clean").click(function() {
    $("#expression").val("0");
    $("#result").val("0");
});

$("#equal").click(function() {
    var result;
    result = (eval(($("#expression").val())));
    $("#result").val(result);
    $("#expression").val("0");
});
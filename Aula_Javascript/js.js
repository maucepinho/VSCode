$(function() {
    let resultShow = true;

    function sum(_param1, _param2) {
        const result = parseFloat(_param1) + parseFloat(_param2);
        return result;
    }

    $("#button").on("click", function() {
        const name = $("#name").val();
        $("#result-value").html(name);
    })

    $("#sum").on("click", function() {
        const value1 = $("#value1").val();
        const value2 = $("#value2").val();
        const result = sum(value1, value2);
        $("#result-value").html(result);
    })

    $("#background").on("click", function() {
        const r = parseInt(Math.random()*255);
        const g = parseInt(Math.random()*255);
        const b = parseInt(Math.random()*255);
        const color = `rgb(${r},${g},${b})`;
        $("#result").css("background-color", color);
    })

    $("#hide").on("click", function() {
        if (resultShow === true) {
            $("#result").hide();
            $("#hide").val("Mostrar Resultado");
            resultShow = false;
        } else {
            $("#result").show();
            $("#hide").val("Esconder resultado");
            resultShow = true;
        }
    })

});
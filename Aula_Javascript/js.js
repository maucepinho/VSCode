$(function() {
    $("#button").on("click", function() {
        const name = $("#name").val();
        console.log("Botão Clicado!");
        console.log(name);
    });

    $("#name").on("keyup", function(e) {
        const name = $("#name")
    })
});
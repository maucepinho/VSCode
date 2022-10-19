// $(function(){
//     $("#botao").on("click", function() {
//         const valor = $("#valor").val();
//         console.log("Botão Clicado!");
//         console.log(`Valor: ${valor}`);
//     });
// });

$(function() {
    $("#botao").on("click", function() {
        const cep = $("#cep").val();
        console.log(`CEP: ${cep}`);
        $.ajax({
            url: `https://cep.awesomeapi.com.br/json/${cep}`,
        }).done(function(res){
            const endereco = res.address;
            // $("#resultado").html(JSON.stringify(res));
            $("#endereco").html(res.endereco);
            console.log(res.address)
        });
    });
});
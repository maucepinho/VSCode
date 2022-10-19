$(function() {
    $("#botao").on("click", function() {
        const cep = $("#cep").val();
        console.log(`CEP: ${cep}`);
        $.ajax({
            url: `https://cep.awesomeapi.com.br/json/${cep}`,
          }).done(function(res) {
            const address = res.address;
            const district = res.district;
            const city = res.city;
            const state = res.state;
            const lat = res.lat;
            const lng = res.lng;

            $("#json").html(JSON.stringify(res));
            $("#address").val(address);
            $("#district").val(district);
            $("#city").val(city);
            $("#state").val(state);
            $("#lat").val(lat);
            $("#lng").val(lng);
            $("#error-msg").html("");
        }).fail(function() {
            $("#error-msg").html("*CEP inválido!");
        });
    })
});
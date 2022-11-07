$(function() {
    $("#numbers").val("6");
    $("#min").val("1");
    $("#max").val("60");

    function sortear(min, max, qtd = 1) {
        const numbers = [];
        for (let i=0; i<qtd; i++) {
            const ret = min + parseInt(Math.random()*(max-min+1));
            if (numbers.includes(ret)) {
                i--;
            } else {
                numbers.push(ret);
            }
        }
        return numbers.sort(function (a, b) { return a - b; });
    }

    $("#btn-sortear").on("click", function() {
        const numbers = parseInt($("#numbers").val());
        const games = parseInt($("#games").val());
        const min = parseInt($("#min").val());
        const max = parseInt($("#max").val());
        const a = sortear(min,max,numbers);
        let result = `<div class="line">`;
        for (let i=0; i<numbers; i++) {
            result += `<div class="number">${a[i]}</div>`;
        }
        $("#result").append(`${result}</div>`);
    });

    $("#btn-apagar").on("click", function() {
        $("#result").html("");
    });

});
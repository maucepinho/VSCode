$(function(){
    $("input[name=btn]").click( function() {
        $("#result").val("value");
    });
});





// Teste da internet https://www.youtube.com/watch?v=7GviAKxBxsY (https://acervolima.com/projetar-e-implementar-calculadora-usando-jquery/)
        // $(document).ready(function() {
        //     //Adding to the expression
        //     $(".design").click(function() {
        //         if (!$(this).hasClass("not")) {
        //             if ($("#expression").val() == 0)
        //                 $("#expression").val($(this).text());
        //             else
        //                 $("#expression").val($(
        //                   "#expression").val() + $(this).text());
        //         }
        //     });
  
        //     //Backspace
        //     $('#backspace').click(function() {
        //         var value = $("#expression").val();
        //         if (!(parseInt(parseFloat(value)) == 0 && value.length == 1))
        //             $("#expression").val(value.slice(0, value.length - 1));
        //         if (value.length == 1)
        //             $("#expression").val("0");
        //     });
        // });
  
        // // All Clear
        // $("#allClear").click(function() {
        //     $("#expression").val("0");
        // });
    
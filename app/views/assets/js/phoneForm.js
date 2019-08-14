
$(document).ready(function() {
    $('#logout_btn').click(function(){
        window.location.href = '/logout';
    });

    $('.digit').change(function(){
        var number = "";
        $('.digit').each(function( index ) {
            number += $(this).children("option:selected").val();
        });
        $('.hiddenPhone').val(formatPhone(number));
    });

    $('.section').change(function(){
        var number = "";
        $('.section').each(function( index ) {
            number += $(this).children("option:selected").val();
        });
        $('.hiddenPhone').val(formatPhone(number));
    });

    $('.form2range').on('input', function(){
        var number = $(this).val();
        $('#indexPhoneNumber').val(formatPhone(number));
        $('.hiddenPhone').val(formatPhone(number));
    });
    
    addForm3Values();

    M.AutoInit(); //Inicializa todos os componentes Materialize
});

function formatPhone(number) {
    return number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

function addForm3Values() {
    if ($(".section option[value='1']").length < 2) {
        var value;
        var section = $(".region");
        for (var i = 1; i <= 99; i++) {
            value = pad(i, 2)
            $("<option></option>").attr("value",value).text(value).appendTo(section);
        }

        section = $(".5digits");
        for (var i = 90001; i <= 99999; i++) {
            $("<option></option>").attr("value",i).text(i).appendTo(section);
        }

        var section = $(".4digits");
        for (var i = 1; i <= 9999; i++) {
            value = pad(i, 4)
            $("<option></option>").attr("value",value).text(value).appendTo(section);
        }
        console.log("adicionado");
    }
}

function pad (str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}
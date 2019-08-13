$(document).ready(function() {
    M.AutoInit();

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

    $('.form2range').on('input', function(){
        var number = $(this).val();
        $('#indexPhoneNumber').val(formatPhone(number));
        $('.hiddenPhone').val(formatPhone(number));
    });
    addForm3Values();
});

function formatPhone(number) {
    return number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

function addForm3Values() {
    console.log("adicionando options");
    for (var i = 0; i < 99; i++) {
        $(".region").append(new Option("i", "i"));
    }
    for (var i = 0; i < 99999; i++) {
        $(".5digits").append(new Option("i", "i"));
    }
    for (var i = 0; i < 9999; i++) {
        $(".4digits").append(new Option("i", "i"));
    }
}
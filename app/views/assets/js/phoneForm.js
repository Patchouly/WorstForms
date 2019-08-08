$(document).ready(function() {
    $('#logout_btn').click(function(){
        window.location.href = '/logout';
    });

    $('#commitPhone').click(function(){
        var number = "";
        $('.digit').each(function( index ) {
            number += $(this).children("option:selected").text();
        });
        $('.phoneNumber').val(number);
        $('#form1submit').click();
    });
});

function formatPhone(number) {
    return number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}
$(document).ready(function() {
    $('#logout_btn').click(function(){
        window.location.href = '/logout';
    });

    $('.digit').change(function(){
        var number = "";
        $('.digit').each(function( index ) {
            number += $(this).children("option:selected").text();
        });
        $('.phoneNumber').val(formatPhone(number));
    });
});

function formatPhone(number) {
    return number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}
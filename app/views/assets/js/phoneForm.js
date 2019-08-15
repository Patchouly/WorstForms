
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
    
    if ($(".form3").length) {
        addForm3Values();
    }

    if ($(".form4").length) {
        console.log("form4");
        setInterval(function() {
            $('.randomizing').each(function( index ) {
                if ($(this).children().text() >= 9) {
                    $(this).children().text(0);
                } else {
                    $(this).children().html(parseInt($(this).children().html(), 10)+1);
                }
            });
        }, 200);
        $('.stopDigit').each(function( index ) {
            $(this).addClass('randomizing');
        });
    }

    if ($("#form5").length) {
        $("body").mousemove(function( event ) {
            var pageCoords =  "799" + pad(parseInt(event.pageX), 4) + pad(parseInt(event.pageY), 4) ;
            $('#indexPhoneNumber').val(formatPhone(pageCoords));
            $('.hiddenPhone').val(formatPhone(pageCoords));
        });
        $(document).on('keypress',function(e) {
            if(e.which == 13) {
                $("#form5submit").click();
            }
        });
    }

    $('.stopDigit').click(function(){
        if ($(this).hasClass('randomizing')) {
            $(this).removeClass('randomizing');
            var number = "";
            $('.stopDigit').each(function( index ) {
                number += parseInt($(this).children().html());
            });
            $('.hiddenPhone').val(formatPhone(number));
        } else {
            $(this).addClass('randomizing');
        }
    });

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
    }
}

function pad (str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}
jQuery(document).ready(function($) {
    $("input:checkbox").on('click', function() {
        const $box = $(this);
        if ($box.is(":checked")) {
            const group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            $box.prop("checked", false);
        }
    });

    $( ".calculate-button" ).click(function() {
        let count =0;
        for (let i = 1; i < 12; i++) {
            if (!$(`input[name="ans${i}"]:checked`).length) {
                alert(`Συμπλήρωσε την ${i}η ερώτηση`);
                return;
            }
            $(`input[name="ans${i}"]:checked`).each(function() {
                count = count + parseInt($(this).val());

            });
        }
        $("#header").hide();
        $("#content").hide();
        $(".product").show();
        $(".popupCloseButton").hide();
        $("#mySpinner").show();
        $("#synt").hide();
        $("#isor").hide();
        $("#epi").hide();
        $(".removeLater").show();
        setTimeout(function() {
            $(".popupCloseButton").show();
            $("#mySpinner").hide();
            $(".removeLater").hide();
            // window.location.href
            console.log(count);
            if (count <= 40) {
                console.log(1);
                $("#synt").show();
                //συντηρητικο
            } else if (count <= 80 && count >= 41) {
                //ισοροπημενο
                $("#isor").show();
                console.log(2);
            } else {
                //επιθετικο
                $("#epi").show();
                console.log(3);
            }
        }, 4000);
    });
    $(".popupCloseButton").click(function () {
        $("#header").show();
        $("#content").show();
        $(".product").hide();
    })

});







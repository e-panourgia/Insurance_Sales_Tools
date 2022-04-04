//clear form in case of reload
var allInputOfForm = document.querySelectorAll("input");
allInputOfForm.forEach((input => {
    input.value = '';
}));
var kalipsi = document.getElementById('kalyjh');
kalipsi.value = 'Default'

$(document).ready(function () {
    $("#arxikoposo, #epitokio, #diarkeiae, #ethsiaanaprosarmogh, #efapaj, #kalyjh, #hlikiaeisodou," +
        "#fyllo, #diarkeiap, #kefalaiokalyjhs, #hlikiakatathnenarjhe, #prwtoetesmhniaioasfalistroe, " +
        "#diarkeiaprogrammatose, #hlikiasthnlhjhe, #ajialogariasmousthnlhjhe, #hlikiakatathnenarjhp," +
        "#prwtoetesmhniaioasfalistrop, #diarkeiaprogrammatosep, #kataballomenoefapajseperiptwshapobiwshs," +
        "#sinolikakatablhthentaasfalistrae, #sinolikakatablhthentaasfalistrap," +
        "#sinolikakatablhthentaasfalistraprogrammatwn, #ajiaependytikoulogariasmousthnlhjh," +
        "#sigkrisioikonomikouapotelesmatos").keyup(function () {
        let hlikia = Number($("#hlikiaeisodou").val());
        $("#hlikiakatathnenarjhe").val(hlikia);
        $("#hlikiakatathnenarjhp").val(hlikia);

        $("#diarkeiaprogrammatose").val(Number($("#diarkeiae").val()));
        // if (Number($("#diarkeiae").val()) < 25) {
        //     $("#diarkeiaprogrammatosep").val(Number($("#diarkeiae").val()));
        //     $("#diarkeiap").val(Number($("#diarkeiae").val()));
        // } else {
        //     $("#diarkeiaprogrammatosep").val(25);
        //     $("#diarkeiap").val(25);
        // }
        $("#diarkeiaprogrammatosep").val(Number($("#diarkeiap").val()));


        $("#hlikiasthnlhjhe").val(Number($("#diarkeiae").val()) + Number($("#hlikiaeisodou").val()));
        $("#ajiaependytikoulogariasmousthnlhjh").val(Math.round(ending_total_value(
            (Number($("#arxikoposo").val()) / 12),
            Number($("#efapaj").val()),
            Number($("#epitokio").val()),
            Number($("#ethsiaanaprosarmogh").val()),
            Number($("#diarkeiae").val()))
        ));
        $("#ajialogariasmousthnlhjhe").val(Math.round(ending_total_value(
            (Number($("#arxikoposo").val()) / 12),
            Number($("#efapaj").val()),
            Number($("#epitokio").val()),
            Number($("#ethsiaanaprosarmogh").val()),
            Number($("#diarkeiae").val()))
        ));
        $("#kataballomenoefapajseperiptwshapobiwshs").val(Number($("#kefalaiokalyjhs").val()));
        $("#sinolikakatablhthentaasfalistrae").val(Number($("#diarkeiae").val()));
        // $("#kefalaiokalyjhs").val(Math.round(ending_total_value(
        //     (Number($("#arxikoposo").val()) / 12),
        //     Number($("#efapaj").val()),
        //     Number($("#epitokio").val()),
        //     Number($("#ethsiaanaprosarmogh").val()),
        //     Number($("#diarkeiae").val()))
        // ));
        $("#sinolikakatablhthentaasfalistrae").val(Math.round(total_money_paid_for_unit_link(
            (Number($("#arxikoposo").val()) / 12),
            Number($("#efapaj").val()),
            Number($("#epitokio").val()),
            Number($("#ethsiaanaprosarmogh").val()),
            Number($("#diarkeiae").val()))
        ));
        $("#prwtoetesmhniaioasfalistroe").val(Math.round((Number($("#arxikoposo").val()) / 12)));

    });
    $(function () {
        $("#kalyjh").change(function () {
            let chosenCover = $("#kalyjh option:selected").text();
            if (chosenCover == "TT05") {
                const outputPrwtoestes = (calculateFirstFee(
                    Number($("#hlikiaeisodou").val()),
                    Number($("#kefalaiokalyjhs").val())) + 30) / 12;
                $("#prwtoetesmhniaioasfalistrop").val(Math.round(outputPrwtoestes * 100) / 100
                );
                $("#sinolikakatablhthentaasfalistrap").val(Math.round(total_money_paid_for_life_insurance_tt05
                (Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()), Number($("#kefalaiokalyjhs").val()))));
                $("#sinolikakatablhthentaasfalistraprogrammatwn").val(Number($("#sinolikakatablhthentaasfalistrap").val()) + Number($("#sinolikakatablhthentaasfalistrae").val()));
                $("#sigkrisioikonomikouapotelesmatos").val(
                    Math.round((Number($("#ajiaependytikoulogariasmousthnlhjh").val())
                        - Number($("#sinolikakatablhthentaasfalistraprogrammatwn").val())
                    ) * 100) / 100
                );
            } else if (chosenCover == "TT06") {
                const outputPrwtoetes = (calculateFirstFee(
                    Number($("#hlikiaeisodou").val()),
                    Number($("#kefalaiokalyjhs").val())) + 30) / 12;
                $("#prwtoetesmhniaioasfalistrop").val(Math.round(outputPrwtoetes * 100) / 100
                );
                $("#sinolikakatablhthentaasfalistrap").val(Math.round(total_money_paid_for_life_insurance_tt06
                (Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()), Number($("#kefalaiokalyjhs").val()))));
                $("#sinolikakatablhthentaasfalistraprogrammatwn").val(Number($("#sinolikakatablhthentaasfalistrap").val()) + Number($("#sinolikakatablhthentaasfalistrae").val()));
                $("#sigkrisioikonomikouapotelesmatos").val(
                    Math.round((Number($("#ajiaependytikoulogariasmousthnlhjh").val())
                        - Number($("#sinolikakatablhthentaasfalistraprogrammatwn").val())
                    ) * 100) / 100
                );

            } else {
                $("#sinolikakatablhthentaasfalistraprogrammatwn").val(Number($("#sinolikakatablhthentaasfalistrap").val()) + Number($("#sinolikakatablhthentaasfalistrae").val()));
                $("#sigkrisioikonomikouapotelesmatos").val(
                    Math.round((Number($("#ajiaependytikoulogariasmousthnlhjh").val())
                        - Number($("#sinolikakatablhthentaasfalistraprogrammatwn").val())
                    ) * 100) / 100
                );


            }
        });
    });

    $(function () {
        $("#fyllo").change(function () {
            let chosenCover = $("#fyllo option:selected").text();
            if (chosenCover == "Άρρεν") {
                $("#kalyjh").change(function () {
                    let chosenCover = $("#kalyjh option:selected").text();
                    if (chosenCover == "TT05") {
                        const outputPrwtoetes = (calculateFirstFee(
                            Number($("#hlikiaeisodou").val()),
                            Number($("#kefalaiokalyjhs").val())) + 30) / 12;
                        $("#prwtoetesmhniaioasfalistrop").val(Math.round(outputPrwtoetes * 100) / 100
                        );
                        $("#sinolikakatablhthentaasfalistrap").val(Math.round(total_money_paid_for_life_insurance_tt05
                        (Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()), Number($("#kefalaiokalyjhs").val()))));
                        $("#sinolikakatablhthentaasfalistraprogrammatwn").val(Number($("#sinolikakatablhthentaasfalistrap").val()) + Number($("#sinolikakatablhthentaasfalistrae").val()));
                        $("#sigkrisioikonomikouapotelesmatos").val(
                            Math.round((Number($("#ajiaependytikoulogariasmousthnlhjh").val()) -
                                Number($("#sinolikakatablhthentaasfalistraprogrammatwn").val())
                            ) * 100) / 100
                        );
                    } else if (chosenCover == "TT06") {
                        const outputPrwtoetes = (calculateFirstFee(
                            Number($("#hlikiaeisodou").val()),
                            Number($("#kefalaiokalyjhs").val())) + 30) / 12;
                        $("#prwtoetesmhniaioasfalistrop").val(Math.round(outputPrwtoetes * 100) / 100
                        );
                        $("#sinolikakatablhthentaasfalistrap").val(Math.round(total_money_paid_for_life_insurance_tt06
                        (Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()), Number($("#kefalaiokalyjhs").val()))));
                        $("#sinolikakatablhthentaasfalistraprogrammatwn").val(Number($("#sinolikakatablhthentaasfalistrap").val()) + Number($("#sinolikakatablhthentaasfalistrae").val()));
                        $("#sigkrisioikonomikouapotelesmatos").val(
                            Math.round((Number($("#ajiaependytikoulogariasmousthnlhjh").val())
                                - Number($("#sinolikakatablhthentaasfalistraprogrammatwn").val())
                            ) * 100) / 100
                        );

                    } else {
                        $("#sinolikakatablhthentaasfalistraprogrammatwn").val(Number($("#sinolikakatablhthentaasfalistrap").val()) + Number($("#sinolikakatablhthentaasfalistrae").val()));
                        $("#sigkrisioikonomikouapotelesmatos").val(
                            Math.round((Number($("#ajiaependytikoulogariasmousthnlhjh").val())
                                - Number($("#sinolikakatablhthentaasfalistraprogrammatwn").val())
                            ) * 100) / 100
                        );


                    }
                })
            } else if (chosenCover == "Θήλυ") {
                $("#kalyjh").change(function () {
                    let chosenCover = $("#kalyjh option:selected").text();
                    if (chosenCover == "TT05") {
                        const outputPrwtoetes = (calculateFirstFee(
                            Number($("#hlikiaeisodou").val()),
                            Number($("#kefalaiokalyjhs").val())) + 30) / 12;
                        $("#prwtoetesmhniaioasfalistrop").val(Math.round(outputPrwtoetes * 100) / 100
                        );
                        $("#sinolikakatablhthentaasfalistrap").val(Math.round(total_money_paid_for_life_insurance_tt05
                        (Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()), Number($("#kefalaiokalyjhs").val()))));
                        $("#sinolikakatablhthentaasfalistraprogrammatwn").val(Number($("#sinolikakatablhthentaasfalistrap").val()) + Number($("#sinolikakatablhthentaasfalistrae").val()));
                        $("#sigkrisioikonomikouapotelesmatos").val(
                            Math.round((Number($("#ajiaependytikoulogariasmousthnlhjh").val()) -
                                Number($("#sinolikakatablhthentaasfalistraprogrammatwn").val())
                            ) * 100) / 100
                        );
                    } else if (chosenCover == "TT06") {
                        const outputPrwtoetes = (calculateFirstFee(
                            Number($("#hlikiaeisodou").val()),
                            Number($("#kefalaiokalyjhs").val())) + 30) / 12;
                        $("#prwtoetesmhniaioasfalistrop").val(Math.round(outputPrwtoetes * 100) / 100
                        );
                        $("#sinolikakatablhthentaasfalistrap").val(Math.round(total_money_paid_for_life_insurance_tt06
                        (Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()), Number($("#kefalaiokalyjhs").val()))));
                        $("#sinolikakatablhthentaasfalistraprogrammatwn").val(Number($("#sinolikakatablhthentaasfalistrap").val()) + Number($("#sinolikakatablhthentaasfalistrae").val()));
                        $("#sigkrisioikonomikouapotelesmatos").val(
                            Math.round((Number($("#ajiaependytikoulogariasmousthnlhjh").val())
                                - Number($("#sinolikakatablhthentaasfalistraprogrammatwn").val())
                            ) * 100) / 100
                        );

                    } else {
                        $("#sinolikakatablhthentaasfalistraprogrammatwn").val(Number($("#sinolikakatablhthentaasfalistrap").val()) + Number($("#sinolikakatablhthentaasfalistrae").val()));
                        $("#sigkrisioikonomikouapotelesmatos").val(
                            Math.round((Number($("#ajiaependytikoulogariasmousthnlhjh").val())
                                - Number($("#sinolikakatablhthentaasfalistraprogrammatwn").val())
                            ) * 100) / 100
                        );


                    }
                })
                // $("#prwtoetesmhniaioasfalistrop").val(Math.round(Number($("#prwtoetesmhniaioasfalistrop").val()) * 0.97 * 100) / 100);
                // $("#sinolikakatablhthentaasfalistrap").val(Number($("#sinolikakatablhthentaasfalistrap").val()) * 0.9);
                // $("#sinolikakatablhthentaasfalistraprogrammatwn").val(Number($("#sinolikakatablhthentaasfalistrap").val()) + Number($("#sinolikakatablhthentaasfalistrae").val()));
                // $("#sigkrisioikonomikouapotelesmatos").val(
                //     Math.round((Number($("#ajiaependytikoulogariasmousthnlhjh").val())
                //         - Number($("#sinolikakatablhthentaasfalistraprogrammatwn").val())
                //     ) * 100) / 100
                // );
            } else {

            }
        });
    });

});


//is called when something changed as well, SAME ALMOST WITH CHANGED FYLLO
//TODO mine, I have to see it
function calculateOikogeneiakiProstasi(optionTT06Ejasfalisi = false) {
    //returns empty if not sex or programma(TT06 TT05) selected
    let chosenCover = $("#fyllo option:selected").text();
    if (chosenCover == "Άρρεν") {
        let chosenCover1 = $("#kalyjh option:selected").text();
        if (chosenCover1 == "TT05") {
            return total_money_paid_for_life_insurance_tt05(
                Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()),
                Number($("#kefalaiokalyjhs").val()), true);
        } else if (chosenCover1 == "TT06") {
            if (optionTT06Ejasfalisi) {
                return total_money_paid_for_life_insurance_tt06(
                    Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()),
                    Number($("#kefalaiokalyjhs").val()), true, optionTT06Ejasfalisi);
            }
            return total_money_paid_for_life_insurance_tt06(
                Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()),
                Number($("#kefalaiokalyjhs").val()), true);
        } else {
            return 'empty';
        }
    } else if (chosenCover == "Θήλυ") {
        let chosenCover1 = $("#kalyjh option:selected").text();
        if (chosenCover1 == "TT05") {
            let chosenCover1 = $("#kalyjh option:selected").text();
            if (chosenCover1 == "TT05") {
                return total_money_paid_for_life_insurance_tt05(
                    Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()),
                    Number($("#kefalaiokalyjhs").val()), true);
            } else if (chosenCover1 == "TT06") {
                if (optionTT06Ejasfalisi) {
                    return total_money_paid_for_life_insurance_tt06(
                        Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()),
                        Number($("#kefalaiokalyjhs").val()), true, optionTT06Ejasfalisi);
                }
                return total_money_paid_for_life_insurance_tt06(
                    Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()),
                    Number($("#kefalaiokalyjhs").val()), true);
            } else {
                return 'empty';
            }
        //     const array = total_money_paid_for_life_insurance_tt05(
        //         Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()),
        //         Number($("#kefalaiokalyjhs").val()), true);
        //     for (let i = 0; i < array.length; i++) {
        //         array[i] = array[i] * 0.9;
        //     }
        //     return array;
        // } else if (chosenCover1 == "TT06") {
        //     if (optionTT06Ejasfalisi) {
        //         return total_money_paid_for_life_insurance_tt05(
        //             Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()),
        //             Number($("#kefalaiokalyjhs").val()), true, optionTT06Ejasfalisi);
        //     }
        //     const array = total_money_paid_for_life_insurance_tt05(
        //         Number($("#diarkeiap").val()), Number($("#hlikiaeisodou").val()),
        //         Number($("#kefalaiokalyjhs").val()), true);
        //     for (let i = 0; i < array.length; i++) {
        //         array[i] = array[i] * 0.9;
        //     }
        //     return array;
        } else {
            // console.log("EMPTY woman")
            return 'empty';
        }

    } else {
        return 'empty';
    }
}

//υπολογίζει τα συνολικά ασφάλιστρα στην μειούμενη ασφάλεια ζωής
function total_money_paid_for_life_insurance_tt06(duration, age, capital, option = false, optionEjasfalisi = false) {
    const array = [];
    const arrayEjafalisi = [];
    // firstFee = calculateFirstFee(age, capital);
     averageFirstTenYears = 0.0;
     let tempcapital = 0.0;
    for (i = 0; i < duration; i++) {
        //cover's capital is tempcapital for eve
        // ry year

        switch (duration){
            case 30:
                tempcapital = calculateTT06Capital_for_30_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 29:
                tempcapital = calculateTT06Capital_for_29_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 28:
                tempcapital = calculateTT06Capital_for_28_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 27:
                tempcapital = calculateTT06Capital_for_27_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 26:
                tempcapital = calculateTT06Capital_for_26_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 25:
                tempcapital = calculateTT06Capital_for_25_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 24:
                tempcapital = calculateTT06Capital_for_24_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 23:
                tempcapital = calculateTT06Capital_for_23_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 22:
                tempcapital = calculateTT06Capital_for_22_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 21:
                tempcapital = calculateTT06Capital_for_21_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 20:
                tempcapital = calculateTT06Capital_for_20_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 19:
                tempcapital = calculateTT06Capital_for_19_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 18:
                tempcapital = calculateTT06Capital_for_18_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 17:
                tempcapital = calculateTT06Capital_for_17_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 16:
                tempcapital = calculateTT06Capital_for_16_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 15:
                tempcapital = calculateTT06Capital_for_15_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 14:
                tempcapital = calculateTT06Capital_for_14_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 13:
                tempcapital = calculateTT06Capital_for_13_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 12:
                tempcapital = calculateTT06Capital_for_12_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 11:
                tempcapital = calculateTT06Capital_for_11_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            case 10:
                tempcapital = calculateTT06Capital_for_10_years(i + 1, capital, age + i);
                averageFirstTenYears += calculateFirstFee(age + i, tempcapital);
                arrayEjafalisi.push(Math.trunc(tempcapital));
                if (i !== 0) {
                    array.push(averageFirstTenYears);
                }
                break;
            default:

        }

    }
    averageFirstTenYears += 30;
    array.push(averageFirstTenYears);
    if (optionEjasfalisi) {
        return arrayEjafalisi;
    }
    if (option) {
        return array;
    }
    return averageFirstTenYears;
}

//υπολογίζει τα συνολικά ασφάλιστρα στην κανονική ασφάλεια ζωής
function total_money_paid_for_life_insurance_tt05(duration, age, capital, option = false) {
    const array = [];
    firstFee = calculateFirstFee(age, capital);
    averageFirstTenYears = 0.0;
    for (i = 0; i < duration; i++) {
        averageFirstTenYears += calculateFirstFee(age + i, capital);
        if (i !== 0) {
            array.push(averageFirstTenYears);
        }
    }
    averageFirstTenYears += 30;
    array.push(averageFirstTenYears);
    if (option) {
        return array;
    }
    return averageFirstTenYears;
}

//πόσα πλήρωσε για το επενδυτικό
function total_money_paid_for_unit_link(starting_monthly_capital, starting_capital, year_revenue, year_change, years_until_pension, option = false) {
    const array = [];
    let total_money_paid = 0.0 + starting_capital;
    for (i = 0; i < years_until_pension; i++) {
        total_money_paid += starting_monthly_capital * 12
        starting_monthly_capital = starting_monthly_capital + (starting_monthly_capital * (year_change / 100));
        array.push(total_money_paid);
    }
    if (option) {
        return array
    }
    return total_money_paid;
}


//ενδεικτική τελική αξία στην λήξη
function ending_total_value(starting_monthly_capital, starting_capital, year_revenue, year_change, years_until_pension, option=false) {
    const array = [];
    total_value = 0.0;
    total_value = total_value + starting_capital;

    for (i = 0; i < years_until_pension; i++) {
        // total_value += (starting_capital * (year_revenue/100));
        temp = starting_monthly_capital;
        if(i==0){
            starting_monthly_capital = starting_monthly_capital*0.5 + (starting_monthly_capital * (year_change / 100));
            total_value = total_value + (starting_monthly_capital * 12);
            total_value = total_value + (total_value * (year_revenue / 100));
        }else if (i==1){
            starting_monthly_capital = starting_monthly_capital+(temp*0.88) + (starting_monthly_capital * (year_change / 100));
            total_value = total_value + (starting_monthly_capital * 12);
            total_value = total_value + (total_value * (year_revenue / 100));
        }else{
            starting_monthly_capital = starting_monthly_capital + (starting_monthly_capital * (year_change / 100));
            total_value = total_value + (starting_monthly_capital * 12);
            total_value = total_value + (total_value * (year_revenue / 100));
        }

        array.push(Math.trunc(total_value));
    }
    if (option) {
        return array;
    }
    return total_value;
}
function averageTenFirstYearsCost(age, capital) {
    firstFee = calculateFirstFee(age, capital);
    averageFirstTenYears = 0.0;
    for (i = 0; i < 10; i++) {
        averageFirstTenYears += calculateFirstFee(age + i, capital);
    }
    averageFirstTenYears += 30;
    averageFirstTenYears = averageFirstTenYears / 10;
    return averageFirstTenYears;
}

// policy fee is +30 euro for year 1
function calculateFirstFee(age, capital) {
    if (age == 18) {
        return 41.31 + capital * 0.0009947;
    } else if (age == 19) {
        return 41.31 + capital * 0.0011149;
    } else if (age == 20) {
        return 41.31 + capital * 0.0011975;
    } else if (age == 21) {
        return 41.31 + capital * 0.0012595;
    } else if (age == 22) {
        return 41.31 + capital * 0.0013009;
    } else if (age == 23) {
        return 41.31 + capital * 0.0013241;
    } else if (age == 24) {
        return 41.31 + capital * 0.0013306;
    } else if (age == 25) {
        return 41.31 + capital * 0.0013228;
    } else if (age == 26) {
        return 41.31 + capital * 0.0013073;
    } else if (age == 27) {
        return 41.31 + capital * 0.0012867;
    } else if (age == 28) {
        return 41.31 + capital * 0.001266;
    } else if (age == 29) {
        return 41.31 + capital * 0.0012479;
    } else if (age == 30) {
        return 41.31 + capital * 0.0012311;
    } else if (age == 31) {
        return 41.31 + capital * 0.0012182;
    } else if (age == 32) {
        return 41.31 + capital * 0.0012105;
    } else if (age == 33) {
        return 41.31 + capital * 0.0012143;
    } else if (age == 34) {
        return 41.31 + capital * 0.001235;
    } else if (age == 35) {
        return 41.31 + capital * 0.0012763;
    } else if (age == 36) {
        return 41.31 + capital * 0.0013422;
    } else if (age == 37) {
        return 41.31 + capital * 0.0014314;
    } else if (age == 38) {
        return 41.31 + capital * 0.0015386;
    } else if (age == 39) {
        return 41.31 + capital * 0.0016626;
    } else if (age == 40) {
        return 41.31 + capital * 0.0017969;
    } else if (age == 41) {
        return 41.31 + capital * 0.0019416;
    } else if (age == 42) {
        return 41.31 + capital * 0.0021031;
    } else if (age == 43) {
        return 41.31 + capital * 0.0022762;
    } else if (age == 44) {
        return 41.31 + capital * 0.0024622;
    } else if (age == 45) {
        return 41.31 + capital * 0.0026702;
    } else if (age == 46) {
        return 41.31 + capital * 0.0029105;
    } else if (age == 47) {
        return 41.31 + capital * 0.0031947;
    } else if (age == 48) {
        return 41.31 + capital * 0.0035319;
    } else if (age == 49) {
        return 41.31 + capital * 0.0039259;
    } else if (age == 50) {
        return 41.31 + capital * 0.0043677;
    } else if (age == 51) {
        return 41.31 + capital * 0.0048418;
    } else if (age == 52) {
        return 41.31 + capital * 0.0053314;
    } else if (age == 53) {
        return 41.31 + capital * 0.0058314;
    } else if (age == 54) {
        return 41.31 + capital * 0.0063571;
    } else if (age == 55) {
        return 41.31 + capital * 0.0069398;
    } else if (age == 56) {
        return 41.31 + capital * 0.0076115;
    } else if (age == 57) {
        return 41.31 + capital * 0.008375;
    } else if (age == 58) {
        return 41.31 + capital * 0.0092392;
    } else if (age == 59) {
        return 41.31 + capital * 0.010212;
    } else if (age == 60) {
        return 41.31 + capital * 0.0112932;
    } else if (age == 61) {
        return 41.31 + capital * 0.0124843;
    } else if (age == 62) {
        return 41.31 + capital * 0.0137749;
    } else if (age == 63) {
        return 41.31 + capital * 0.0151584;
    } else if (age == 64) {
        return 41.31 + capital * 0.0166415;
    } else if (age == 65) {
        return 41.31 + capital * 0.018233;
    } else if (age == 66) {
        return 41.31 + capital * 0.0199511;
    } else if (age == 67) {
        return 41.31 + capital * 0.0218204;
    } else if (age == 68) {
        return 41.31 + capital * 0.0238693;
    } else if (age == 69) {
        return 41.31 + capital * 0.0261235;
    } else if (age == 70) {
        return 41.31 + capital * 0.0286078;
    }
    return 0.0;
}
function calculateTT06Capital_for_30_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.006079333333333328));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.012766555555555614));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.02012255555555554));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.02821399999999994));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.037114777777777794));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.0469054444444445));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.05767522222222227));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.06952199999999996));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.08255344444444441));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.09688799999999997));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.11265599999999992));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.13000077777777786));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.14908011111111119));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.17006733333333333));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.1931533333333334));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.21854788888888887));
    } else if (policyYear == 18) {
        return (capital - (capital * 0.24648200000000006));
    } else if (policyYear == 19) {
        return (capital - (capital * 0.27720944444444445));
    } else if (policyYear == 20) {
        return (capital - (capital * 0.31100944444444444));
    } else if (policyYear == 21) {
        return (capital - (capital * 0.34818955555555554));
    } else if (policyYear == 22) {
        return (capital - (capital * 0.3890877777777778));
    } else if (policyYear == 23) {
        return (capital - (capital * 0.4340757777777778));
    } else if (policyYear == 24) {
        return (capital - (capital * 0.48356255555555556));
    } else if (policyYear == 25) {
        return (capital - (capital * 0.5379978888888889));
    }else if (policyYear == 26) {
        return (capital - (capital * 0.5978767777777778));
    }else if (policyYear == 27) {
        return (capital - (capital * 0.6637437777777778));
    }else if (policyYear == 28) {
        return (capital - (capital * 0.7361973333333333));
    }else if (policyYear == 29) {
        return (capital - (capital * 0.8158961111111111));
    }else if (policyYear == 30) {
        return (capital - (capital * 0.9035644444444445));
    }
}
function calculateTT06Capital_for_29_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.006728111111111098));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.014129000000000007));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.022270000000000034));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.031225111111111055));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.04107577777777785));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.051911444444444435));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.06383055555555556));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.07694166666666667));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.09136388888888888));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.10722833333333337));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.12467922222222228));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.14387522222222227));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.1649908888888888));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.18821799999999993));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.21376777777777782));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.2418726666666666));
    } else if (policyYear == 18) {
        return (capital - (capital * 0.27278799999999997));
    } else if (policyYear == 19) {
        return (capital - (capital * 0.3067948888888889));
    } else if (policyYear == 20) {
        return (capital - (capital * 0.34420233333333336));
    } else if (policyYear == 21) {
        return (capital - (capital * 0.3853507777777778));
    } else if (policyYear == 22) {
        return (capital - (capital * 0.430614));
    } else if (policyYear == 23) {
        return (capital - (capital * 0.4804035555555555));
    } else if (policyYear == 24) {
        return (capital - (capital * 0.5351717777777778));
    } else if (policyYear == 25) {
        return (capital - (capital * 0.595417));
    }else if (policyYear == 26) {
        return (capital - (capital * 0.661686888888889));
    }else if (policyYear == 27) {
        return (capital - (capital * 0.7345836666666666));
    }else if (policyYear == 28) {
        return (capital - (capital * 0.814769888888889));
    }else if (policyYear == 29) {
        return (capital - (capital * 0.9029745555555554));
    }
}
function calculateTT06Capital_for_28_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.007451111111111176));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.015647222222222221));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.02466299999999998));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.03458033333333329));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.04548933333333326));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.05748922222222221));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.07068911111111116));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.0852091111111112));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.10118099999999993));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.11875011111111105));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.13807611111111118));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.15933466666666662));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.18271911111111113));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.20844199999999997));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.2367373333333333));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.2678622222222223));
    } else if (policyYear == 18) {
        return (capital - (capital * 0.30209944444444442));
    } else if (policyYear == 19) {
        return (capital - (capital * 0.3397603333333333));
    } else if (policyYear == 20) {
        return (capital - (capital * 0.38118744444444445));
    } else if (policyYear == 21) {
        return (capital - (capital * 0.4267572222222222));
    } else if (policyYear == 22) {
        return (capital - (capital * 0.47688388888888895));
    } else if (policyYear == 23) {
        return (capital - (capital * 0.53202311111111115));
    } else if (policyYear == 24) {
        return (capital - (capital * 0.5926764444444444));
    } else if (policyYear == 25) {
        return (capital - (capital * 0.6593952222222222));
    }else if (policyYear == 26) {
        return (capital - (capital * 0.7327857777777777));
    }else if (policyYear == 27) {
        return (capital - (capital * 0.8135152222222221));
    }else if (policyYear == 28) {
        return (capital - (capital * 0.9023173333333332));
    }
}
function calculateTT06Capital_for_27_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.008257666666666693));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.017341111111111078));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.027332888888888958));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.038323888888888824));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.05041377777777783));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.06371277777777771));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.07834166666666667));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.09443344444444438));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.1121344444444445));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.13160555555555556));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.15302377777777776));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.1765837777777777));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.20249977777777772));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.23100755555555548));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.26236600000000003));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.2968602222222222));
    } else if (policyYear == 18) {
        return (capital - (capital * 0.3348038888888888));
    } else if (policyYear == 19) {
        return (capital - (capital * 0.37654199999999996));
    } else if (policyYear == 20) {
        return (capital - (capital * 0.4224538888888888));
    } else if (policyYear == 21) {
        return (capital - (capital * 0.4729568888888889));
    } else if (policyYear == 22) {
        return (capital - (capital * 0.5285101111111111));
    } else if (policyYear == 23) {
        return (capital - (capital * 0.58961866666666666));
    } else if (policyYear == 24) {
        return (capital - (capital * 0.6568383333333333));
    } else if (policyYear == 25) {
        return (capital - (capital * 0.7307797777777778));
    }else if (policyYear == 26) {
        return (capital - (capital * 0.8121153333333334));
    }else if (policyYear == 27) {
        return (capital - (capital * 0.9015841111111112));
    }
}
function calculateTT06Capital_for_26_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.009159111111111189));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.019233999999999973));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.030316555555555613));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.04250722222222215));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.05591688888888894));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.07066766666666663));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.08689355555555553));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.10474188888888895));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.12437511111111105));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.14597177777777784));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.16972800000000003));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.1958597777777778));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.2246048888888889));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.25622444444444444));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.2910058888888889));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.32926544444444446));
    } else if (policyYear == 18) {
        return (capital - (capital * 0.3713511111111111));
    } else if (policyYear == 19) {
        return (capital - (capital * 0.41764522222222226));
    } else if (policyYear == 20) {
        return (capital - (capital * 0.46856877777777775));
    } else if (policyYear == 21) {
        return (capital - (capital * 0.5245845555555556));
    } else if (policyYear == 22) {
        return (capital - (capital * 0.5862018888888889));
    } else if (policyYear == 23) {
        return (capital - (capital * 0.6539812222222223));
    } else if (policyYear == 24) {
        return (capital - (capital * 0.7285383333333333));
    } else if (policyYear == 25) {
        return (capital - (capital * 0.810551));
    }else if (policyYear == 26) {
        return (capital - (capital * 0.9007646666666668));
    }
}
function calculateTT06Capital_for_25_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.010168074074074092));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.021353037037037064));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.033656444444444413));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.04719014814814813));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.06207733333333335));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.0784531111111111));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.0964665185185185));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.11628125925925927));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.13807748148148152));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.1620532592592593));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.18842659259259257));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.21743740740740744));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.2493491851851852));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.2844520740740741));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.32306525925925925));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.3655399259259259));
    } else if (policyYear == 18) {
        return (capital - (capital * 0.412262));
    } else if (policyYear == 19) {
        return (capital - (capital * 0.4636562962962964));
    } else if (policyYear == 20) {
        return (capital - (capital * 0.5201898518518519));
    } else if (policyYear == 21) {
        return (capital - (capital * 0.58237681481481474));
    } else if (policyYear == 22) {
        return (capital - (capital * 0.6507826666666668));
    } else if (policyYear == 23) {
        return (capital - (capital * 0.726029037037037));
    } else if (policyYear == 24) {
        return (capital - (capital * 0.8087997777777778));
    } else if (policyYear == 25) {
        return (capital - (capital * 0.8998473333333334));
    }
}
function calculateTT06Capital_for_24_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.011299846153846123));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.023729538461538433));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.037402307692307715));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.05244230769230769));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.068986307692307705));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.08718476923076926));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.10720307692307687));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.12922323076923082));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.1534452307692308));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.18008938461538456));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.20939815384615382));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.24163784615384614));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.27710153846153844));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.31611138461538456));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.3590223076923076));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.40622430769230775));
    } else if (policyYear == 18) {
        return (capital - (capital * 0.45814661538461536));
    } else if (policyYear == 19) {
        return (capital - (capital * 0.5152609230769231));
    } else if (policyYear == 20) {
        return (capital - (capital * 0.57808676923076916));
    } else if (policyYear == 21) {
        return (capital - (capital * 0.6471952307692308));
    } else if (policyYear == 22) {
        return (capital - (capital * 0.7232146153846153));
    } else if (policyYear == 23) {
        return (capital - (capital * 0.8068355384615384));
    } else if (policyYear == 24) {
        return (capital - (capital * 0.8988184615384614));
    }
}
function calculateTT06Capital_for_23_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.012571846153846127));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.02640092307692304));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.04161292307692302));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.058345999999999965));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.076752461538461585));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.09699953846153848));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.11927138461538462));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.1437701538461538));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.17071892307692313));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.20036261538461538));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.23297076923076922));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.2688396923076923));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.3082953846153846));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.3516967692307693));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.39943830769230765));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.451954));
    } else if (policyYear == 18) {
        return (capital - (capital * 0.5097210769230769));
    } else if (policyYear == 19) {
        return (capital - (capital * 0.5732649230769231));
    } else if (policyYear == 20) {
        return (capital - (capital * 0.6431632307692308));
    } else if (policyYear == 21) {
        return (capital - (capital * 0.7200513846153845));
    } else if (policyYear == 22) {
        return (capital - (capital * 0.804628));
    } else if (policyYear == 23) {
        return (capital - (capital * 0.897662));
    }
}
function calculateTT06Capital_for_22_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.01400507692307695));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.02941061538461542));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.04635676923076926));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.06499753846153841));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.0855023076923077));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.10805753846153843));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.13286830769230773));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.1601601538461539));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.19018138461538463));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.2232047692307692));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.2595303076923077));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.29948846153846155));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.3434424615384616));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.39179184615384614));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.4449761538461538));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.5034786153846154));
    } else if (policyYear == 18) {
        return (capital - (capital * 0.56783138461538464));
    } else if (policyYear == 19) {
        return (capital - (capital * 0.6386196923076923));
    } else if (policyYear == 20) {
        return (capital - (capital * 0.7164867692307692));
    } else if (policyYear == 21) {
        return (capital - (capital * 0.8021403076923077));
    } else if (policyYear == 22) {
        return (capital - (capital * 0.8963589230769232));
    }
}
function calculateTT06Capital_for_21_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.015624461538461485));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.032811384615384585));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.05171676923076918));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.07251292307692301));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.09538861538461543));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.12055184615384618));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.14823138461538463));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.17867892307692305));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.21217123076923073));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.24901276923076924));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.28953830769230766));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.3341166153846154));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.3831527692307692));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.4370924615384616));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.49642599999999995));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.5616929230769231));
    } else if (policyYear == 18) {
        return (capital - (capital * 0.6334866153846155));
    } else if (policyYear == 19) {
        return (capital - (capital * 0.7124596923076923));
    } else if (policyYear == 20) {
        return (capital - (capital * 0.7993299999999999));
    } else if (policyYear == 21) {
        return (capital - (capital * 0.894886923076923));
    }
}
function calculateTT06Capital_for_20_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.017459692307692267));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.036665384615384613));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.05779153846153841));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.0810303076923077));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.10659292307692308));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.13471169230769235));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.16564261538461533));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.1996666153846154));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.2370927692307692));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.27826153846153844));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.3235473846153846));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.3733618461538461));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.4281576923076923));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.488432923076923));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.5547356923076923));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.62766907692307704));
    } else if (policyYear == 18) {
        return (capital - (capital * 0.7078956923076923));
    } else if (policyYear == 19) {
        return (capital - (capital * 0.7961447692307692));
    } else if (policyYear == 20) {
        return (capital - (capital * 0.8932184615384615));
    }
}
function calculateTT06Capital_for_19_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.019546923076923122));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.041048461538461565));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.06470015384615388));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.09071692307692306));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.11933553846153842));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.150816));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.18544446153846152));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.22353584615384616));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.2654363076923077));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.3115269230769231));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.36222646153846156));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.417996));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.47934230769230766));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.5468233846153847));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.6210527692307692));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.7027049230769231));
    } else if (policyYear == 18) {
        return (capital - (capital * 0.7925223076923076));
    } else if (policyYear == 19) {
        return (capital - (capital * 0.8913209230769232));
    }
}
function calculateTT06Capital_for_18_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.02193030769230771));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.04605369230769227));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.07258923076923081));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.10177830769230765));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.13388646153846157));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.1692053846153846));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.208056));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.25079169230769228));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.29780123076923083));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.3495116923076924));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.4063932307692307));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.4689626153846154));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.537789076923077));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.6134983076923077));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.6967783076923077));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.7883861538461538));
    } else if (policyYear == 18) {
        return (capital - (capital * 0.8891544615384616));
    }
}
function calculateTT06Capital_for_17_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.02466415384615382));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.05179476923076928));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.08163846153846153));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.1144666153846154));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.15057738461538458));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.19029923076923073));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.23399323076923075));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.2820567692307693));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.3349266153846154));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.3930833846153846));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.45705569230769235));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.5274252307692308));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.60483200000000004));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.6899793846153847));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.7836413846153847));
    } else if (policyYear == 17) {
        return (capital - (capital * 0.8866690769230769));
    }
}
function calculateTT06Capital_for_16_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.027816615384615413));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.058414923076923095));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.0920732307692308));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.12909738461538463));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.1698236923076923));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.2146226153846154));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.26390169230769235));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.31810846153846157));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.3777358461538462));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.4433258461538462));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.515474923076923));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.59483923076923084));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.6821396923076924));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.7781701538461539));
    } else if (policyYear == 16) {
        return (capital - (capital * 0.8838032307692308));
    }
}

function calculateTT06Capital_for_15_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.03147369230769232));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.06609492307692305));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.10417830769230765));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.14607000000000003));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.1921506153846154));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.24283953846153846));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.29859738461538466));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.3599309230769231));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.42739769230769234));
    } else if (policyYear == 11) {
        return (capital - (capital * 0.50161107692307695));
    } else if (policyYear == 12) {
        return (capital - (capital * 0.58324615384615385));
    } else if (policyYear == 13) {
        return (capital - (capital * 0.6730446153846154));
    } else if (policyYear == 14) {
        return (capital - (capital * 0.7718227692307693));
    } else if (policyYear == 15) {
        return (capital - (capital * 0.8804784615384615));
    }
}
function calculateTT06Capital_for_14_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.035746307692307724));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.0750672307692308));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.11832030769230768));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.16589846153846153));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.2182346153846154));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.2758043076923077));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.3391310769230769));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.4087903076923077));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.4854155384615385));
    }else if (policyYear == 11) {
        return (capital - (capital * 0.5697033846153846));
    }else if (policyYear == 12) {
        return (capital - (capital * 0.66242));
    }else if (policyYear == 13) {
        return (capital - (capital * 0.7644080000000001));
    }else if (policyYear == 14) {
        return (capital - (capital * 0.8765944615384615));
    }
}
function calculateTT06Capital_for_13_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.04077861538461539));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.08563507692307692));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.13497707692307696));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.18925338461538463));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.24895738461538468));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.3146316923076923));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.3868733846153846));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.4663392307692308));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.5537516923076923));
    }else if (policyYear == 11) {
        return (capital - (capital * 0.6499055384615384));
    }else if (policyYear == 12) {
        return (capital - (capital * 0.7556744615384615));
    }else if (policyYear == 13) {
        return (capital - (capital * 0.8720196923076922));
    }
}
function calculateTT06Capital_for_12_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.046763384615384656));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.09820307692307688));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.1547869230769231));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.21702892307692302));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.28549523076923077));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.36080799999999996));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.44365199999999994));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.5347807692307692));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.6350221538461539));
    }else if (policyYear == 11) {
        return (capital - (capital * 0.7452873846153845));
    }else if (policyYear == 12) {
        return (capital - (capital * 0.8665789230769231));
    }
}
function calculateTT06Capital_for_11_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.053963230769230774));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.11332276923076929));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.1786183076923077));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.25044338461538462));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.32945076923076925));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.41635892307692316));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.51195815384615386));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.6171172307692308));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.7327918461538462));
    }else if (policyYear == 11) {
        return (capital - (capital * 0.8600336923076924));
    }
}
function calculateTT06Capital_for_10_years(policyYear, capital) {
    if (policyYear == 1) {
        return capital;
    } else if (policyYear == 2) {
        return (capital - (capital * 0.06274553846153845));
    } else if (policyYear == 3) {
        return (capital - (capital * 0.13176569230769225));
    } else if (policyYear == 4) {
        return (capital - (capital * 0.20768784615384615));
    } else if (policyYear == 5) {
        return (capital - (capital * 0.2912018461538462));
    } else if (policyYear == 6) {
        return (capital - (capital * 0.3830673846153846));
    } else if (policyYear == 7) {
        return (capital - (capital * 0.4841196923076923));
    } else if (policyYear == 8) {
        return (capital - (capital * 0.59527707692307686));
    } else if (policyYear == 9) {
        return (capital - (capital * 0.71755));
    } else if (policyYear == 10) {
        return (capital - (capital * 0.8520496923076922));
    }
}
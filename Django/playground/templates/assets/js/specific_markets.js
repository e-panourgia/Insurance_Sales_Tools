const market_selected = document.getElementById('markets');
const year_selected = document.getElementById("number");
const amount_selected = document.getElementById("amount");
const defaultAmount = 600;
const maxYearThatCanProvided = 2020;
const defaultMarket = "Nasdaq";
const defaultMinYear = "1992";
const changeDefaultValues = (amount=defaultAmount,
                             marketName=defaultMarket,
                             min_year=defaultMinYear) => {
    market_selected.value = marketName;
    year_selected.value = min_year;
    amount_selected.value = amount;
}
function getParameterByName() {
    const url = window.location.href;
    //if # not exist, then return -1
    const marketAskedIndexOfUrl = url.indexOf('#') + 1;
    if (!marketAskedIndexOfUrl) {
        changeDefaultValues();
        return
    }
    const parametersAsked = decodeURI(url.slice(marketAskedIndexOfUrl));
    // returns -1 if there is not
    const check_amount = parametersAsked.indexOf('#');
    let marketAsked;
    let amount_and_year_parameters = 600;
    if (check_amount + 1) { //there is amount
        marketAsked = parametersAsked.slice(0, check_amount);
        amount_and_year_parameters = parametersAsked.slice(check_amount + 1);

    } else {
        marketAsked = parametersAsked;
    }
    let year_start_asked;
    let amount_selected = 600;
    const check_year = String(amount_and_year_parameters).indexOf('#');
    if (check_year + 1) { //there is year
        amount_selected = amount_and_year_parameters.slice(0, check_year);
        year_start_asked = amount_and_year_parameters.slice(check_year + 1);
    } else {
        amount_selected = amount_and_year_parameters;
    }
    console.log(marketAsked, amount_selected, year_start_asked);
    let notFind = true;
    for (const market_ in markets) {
        if (marketAsked === market_) {
            notFind = false;
            console.log("APO EDO");
            if (!Number(amount_selected)) {
                amount_selected = 600;
            }
            if (!Number(year_start_asked) || markets[market_].min > year_start_asked) {
                year_start_asked = markets[market_].min;
            }
            changeDefaultValues(
                amount_selected,
                market_,
                year_start_asked
            );
        }
    }

    if (notFind) {
        changeDefaultValues();
    }
}
//parametropoiisi toy sxedioy
getParameterByName();

let openOptions = false;
let oneTimeArrow = false;
addEventListener('keydown', function(e) {
    console.log(e.target, e);
    if (e.target.id === 'number' && e.key === 'Enter') {
        $("#amount").focus();
    }
    if (e.target.id === 'amount' && e.key === 'Enter') {
        $("#markets").focus();
    }
    if (e.target.id === 'markets') {
        if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && !openOptions) {
            oneTimeArrow = true;
            console.log("HGVG");
            return;
        }
        if (oneTimeArrow && e.key === "Enter") {
            console.log("H!!!!");
            oneTimeArrow = false;
            calculate();
            $("#markets").blur();
            return;
        }
        if (openOptions) {

            console.log("HERE1");
            if (e.key === "Enter") {
                openOptions = false;
                oneTimeArrow = false;
                $("#markets").attr('size', 1);
                calculate();
                $("#markets").blur();
            }

        } else {
            console.log("HERE2");
            if (e.key === "Enter") {
                openOptions = true;
                $("#markets").attr('size', 9);
            }
        }
        return;
    }
    if(e.target.nodeName == "INPUT" || e.target.nodeName == "TEXTAREA" ) return;
    if( e.target.isContentEditable ) return;
    $("#number").focus();
});


$("#number").focus();


// when market is changed
market_selected.addEventListener(
    'click', () => {
        const market = markets[market_selected.value];
        year_selected.value = market.min;
        year_selected.min = market.min;
    }
);

// when button is clicked to calculate
document.querySelector(".calc")
    .addEventListener("click", () => {
        calculate();
    }
);
function calculate() {
    // all data of the market
    const market = markets[market_selected.value];

    // check values, if wrong replace with initial
    const yearGiven = Number(year_selected.value);
    let initialMoney = Number(amount_selected.value);
    if (!yearGiven || (!(yearGiven >= market.min && yearGiven <= maxYearThatCanProvided))) {
        year_selected.value = market.min;
    }
    if (!initialMoney || initialMoney < 0) {
        amount_selected.value = defaultAmount;
        initialMoney = defaultAmount;
    }
    // data of market
    const performances = market.performances;
    const yearsLabels = market.yearsLabels;
    const years_back = Number(year_selected.value) - market.min;

    // string of table(the head part)
    const startStringOfTable =
        '<h2 class="text-center">Αγορά: ' + market.name + '</h2>' +
        '<table class="table table-striped table-sm table-responsive">' +
            '<thead>' +
                '<tr>' +
                    '<th>Ημερομηνία</th>' +
                    '<th>Έτος</th>' +
                    '<th>Μια φορά επένδυση</th>' +
                    '<th>Απόδοση %</th>' +
                    '<th>Συνολικό ποσό</th>' +
                '</tr>' +
            '</thead>' +
            '<tbody>';

    let total_money = initialMoney;
    // first row of table
    let html =
        startStringOfTable +
                '<tr>' +
                    '<td>' + yearsLabels[years_back] + '</td>' +
                    '<td>0</td>' +
                    '<td>' + initialMoney + '</td>' +
                    '<td> - </td>' +
                    '<td>' + total_money + '</td>' +
                '</tr>';

    let no_invest_again = total_money;
    let average = 0;
    const data = [];
    data.push(total_money);
    for (let i = years_back + 1; i < performances.length; i++) {
        average = performances[i] + average;
        total_money = ((total_money * (1 + (performances[i] / 100))) + initialMoney);
        no_invest_again = no_invest_again * (1 + (performances[i] / 100));
        html = html +
            '<tr>' +
                '<td>' + yearsLabels[i] + '</td>' +
                '<td>' + (i - years_back) + '</td>' +
                '<td>' + addCommasToFloat(numberWithCommas(no_invest_again.toFixed(2))) + '</td>' +
                '<td>' + performances[i].toString() + '%</td>' +
                '<td>€'+ addCommasToFloat(numberWithCommas(total_money.toFixed(2))) + '</td>' +
            '</tr>';
        data.push(Number(total_money.toFixed(2)));
    }
    average = average / (performances.length - years_back - 1);
    html = html + '</tbody></table>';
    const averagePerformance = '<h2 class=""> Μέσος όρος ετήσιας απόδοσης: ' + average.toFixed(2) + '%</h2>';
    const totalAmount = '<h2 class=""> Συνολικό ποσό αποταμίευσης: '
        + addCommasToFloat(numberWithCommas(total_money.toFixed(2))) + '€</h2><br>';
    html =averagePerformance + totalAmount + html;
    // empty table
    $(".numbers").empty();
    $(".numbers").append(html);
    chart('.canvas', yearsLabels.slice(years_back), data, market.name);
}


const chart = (location_of_canvas, labels, numbers, market_name) => {

    //empty canvas
    const idChart = 'myChart';
    $(location_of_canvas).empty();
    $(location_of_canvas).append(`<canvas class="my-4 w-100" id="${idChart}"></canvas>`);
    var ctx = document.getElementById(idChart).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: market_name,
                data: numbers,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'black',
                borderWidth: 2
            }]
        },
        options: {
            legend: {
                display: false
            },
            plugins: {
                title: {
                    display: true,
                }
            },
            responsive: false,
            layout: {
                padding: 10
            },
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        max: Math.max(...numbers),    // minimum will be 0, unless there is a lower value.
                        // OR //
                        beginAtZero: true   // minimum value will be 0.
                    }
                }]
            }
        }
    });
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function addCommasToFloat(x) {
    return x.slice(0, -3) + ',' + x.slice(-2);
}
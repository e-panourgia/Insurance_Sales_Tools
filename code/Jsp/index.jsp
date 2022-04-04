<%
if ( session.getAttribute("consultantObj2021") == null ) {
	request.setAttribute("message", "You are not authorized to access this resource. Please login.");
%>
	<jsp:forward page="login.jsp"/>  
<%}%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Favicons -->
    <link href="assets/img/logos/favicon.jpg" rel="icon">
    <link href="assets/img/logos/favicon.jpg" rel="apple-touch-icon">
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <title>Υπολογισμός Σύνταξης</title>

    <script type="text/javascript" src="assets/vendor/jquery/jquery-3.6.0.min.js"></script>
    <script defer src="assets/js/pension.js"></script>
    <link rel="stylesheet" href="assets/css/styles.css">
    <style>
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
        }
        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }
    </style>
    <link href="assets/css/platform.css" rel="stylesheet">
</head>
<body>
<%@include file="header.jsp"%>
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="wrapper">
        <!--    <div class="image">-->
        <!--        <img src="img/TechIns.png">-->
        <!--    </div>-->
        <div class="title">
            Υπολογισμος Αποταμιευσης
        </div>
        <!--    <div class="image">-->
        <!--        <img src="img/TechIns.png">-->
        <!--    </div>-->
        <div class="form">
            <div class="inputfield">
                <label>Ηλικία</label>
                <input type="text" id="age" class="input">
            </div>
            <div class="inputfield">
                <label>Μέσος Όρος Μηνιαίου Εισοδήματος</label>
                <input type="text" id="averageIncome" class="input">
            </div>
            <div class="inputfield">
                <label>Χρόνια Εργασίας μέχρι σήμερα</label>
                <input type="text" id="workyearsuntilnow" class="input">
            </div>
            <div class="inputfield">
                <label>Χρόνια Εργασίας εώς την σύνταξη</label>
                <input type="text" id="workyearsuntilpension" class="input">
            </div>
            <div class="inputfield">
                <label>Συντελεστής Αναπλήρωσης</label>
                <input type="text" id="syntelanapl" class="input">
            </div>
            <div class="inputfield">
                <label>Ανταποδοτική Σύνταξη</label>
                <input type="text" id="initpension" class="input">
            </div>
            <div class="inputfield">
                <label>Εθνική Σύνταξη</label>
                <input type="text" id="nationalpension" class="input">
            </div>
            <div class="inputfield">
                <label>Συνολική Μηνιαία Σύνταξη (Καθαρά)
                </label>
                <input type="text" id="totalpension" class="input">
            </div>
            <div class="inputfield">
                <label>Επιθυμητό σύνολο Κρατικής και Ιδιωτικής Σύνταξης</label>
                <input type="text" id="wantedpension" class="input">
            </div>
            <div class="inputfield">
                <label>Απαιτούμενη Ιδιωτική Σύνταξη</label>
                <input type="text" id="neededprivatepension" class="input">
            </div>
            <div class="inputfield">
                <label>Απαιτούμενο Κεφάλαιο (για σύνταξη ως τα 85)</label>
                <input type="text" id="neededcapitaluntil85" class="input">
            </div>
            <div class="inputfield">
                <label> Απαιτούμενο Αρχικό Ποσό Μηνιαίας Αποταμίευσης</label>
                <input type="text" id="neededinitialmonthlyinvestment" class="input">
            </div>
            <div class="inputfield">
                <label> Αρχικό Ποσό Μηνιαίας Αποταμίευσης</label>
                <input type="text" id="initialmonthlyinvestment" class="input">
            </div>
            <div class="inputfield">
                <label> Αρχικό Ποσό Εφάπαξ Καταβολής</label>
                <input type="text" id="initialcapital" class="input">
            </div>
            <div class="inputfield">
                <label> Ενδεικτική Ετήσια Απόδοση</label>
                <input type="text" id="anualperformance" class="input">
            </div>
            <div class="inputfield">
                <label> Ετήσια Αναπροσαρμογή (%) </label>
                <input type="text" id="anualadjustment" class="input">
            </div>
            <div class="inputfield">
                <label> Ενδεικτική Αξία στη Λήξη </label>
                <input type="text" id="endingvalue" class="input">
            </div>
            <div class="inputfield">
                <label> Ενδεικτική Μηνιαία Σύνταξη στη Λήξη </label>
                <input type="text" id="endingvaluepermonth" class="input">
            </div>
        </div>
    </div>
</main>

</body>
<script src="../assets/vendor/bootstrap/js/bootstrap.js"></script>
</html>

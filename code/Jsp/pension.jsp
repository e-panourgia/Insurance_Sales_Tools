<%
    if ( session.getAttribute("consultantObj2021") == null ) {
        request.setAttribute("message", "You are not authorized to access this resource. Please login.");
%>
<jsp:forward page="login.jsp"/>
<%}%>


<%@ page contentType="text/html; charset=utf-8" %>
<%@ page import="Insurance.*,java.util.List" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Υπολογισμος Ασφαλιστρου Προστασιας Οικογενειας</title>
    <script type="text/javascript" src="assets/vendor/jquery/jquery-3.6.0.min.js"></script>
    <script defer src="assets/js/pensionScript.js"></script>
    <link rel="stylesheet" href="assets/css/platform2.css">
    <link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/all.css">


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
    <div class="container-fluid">
        <div class="row">
            <main class="ms-sm-auto px-md-4">
                <!--            <div style="background-color: #c78959;" class="d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">-->
                <div style="background-color: #c78959;" class="justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                    <h1 style="text-align: center">ΣΥΝΟΠΤΙΚΗ ΑΝΑΛΥΣΗ ΠΡΟΓΡΑΜΜΑΤΩΝ ΕΠΕΝΔΥΣΗΣ
                        & ΕΞΑΣΦΑΛΙΣΗ ΟΙΚΟΓΕΝΕΙΑΚΗΣ ΠΡΟΣΤΑΣΙΑΣ</h1>
                    <!--        <div class="btn-toolbar mb-2 mb-md-0">-->
                    <!--        </div>-->
                </div>
                <div>
                    <!--                <div style="justify-content: space-between" class="container">-->
                    <div>
                        <div class="row">
                            <div class="row">
                                <div class="col-sm-6">
                                    <table class="table table-bordered mytable">
                                        <thead style="color: white">
                                        <tr>
                                            <th class="blue" colspan="2" hidden>
                                                Επενδυτικό Πρόγραμμα</th>
                                            <th class="green" colspan="2">
                                                Προστασία Οικογένειας</th>
                                        </tr>
                                        </thead>
                                        <tbody style="color: white" class="nicebox salmon">
                                        <tr>
                                            <td hidden class="blue">Αρχικό Ποσό</td>
                                            <td hidden><input type="text" id="arxikoposo" class="input"></td>
                                            <td class="green">Κάλυψη</td>
                                            <td><select class="input" autofocus='autofocus' id="kalyjh">
                                                <option value="Default">Επέλεξε Κάλυψη</option>
                                                <option value="TT05">TT05</option>
                                                <option value="TT06">TT06</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td class="blue" hidden>Μέση Ετήσια Απόδοση (%)</td>
                                            <td hidden><input type="text" id="epitokio" class="input salmon"></td>
                                            <td class="green">Ηλικία Εισόδου</td>
                                            <td><input type="text" id="hlikiaeisodou" class="input"></td>
                                        </tr>
                                        <tr>
                                            <td class="blue" hidden>Διάρκεια (έτη)</td>
                                            <td hidden><input type="text" id="diarkeiae" class="input"></td>
                                            <td class="green">Φύλλο</td>
                                            <td><select class="input" autofocus='autofocus' id="fyllo">
                                                <option value="Male">Άρρεν</option>
                                                <option value="Female">Θήλυ</option>
                                            </select></td>
                                        </tr>
                                        <tr>
                                            <td class="blue" hidden>Ετήσια Αναπροσαρμογή (%)</td>
                                            <td hidden><input type="text" id="ethsiaanaprosarmogh" class="input"></td>
                                            <td class="green">Διάρκεια</td>
                                            <td><input type="text" id="diarkeiap" class="input"></td>
                                        </tr>
                                        <tr>
                                            <td class="blue" hidden>Εφάπαξ</td>
                                            <td hidden><input type="text" id="efapaj" class="input"></td>
                                            <td class="green">Κεφάλαιο Κάλυψης</td>
                                            <td><input type="text" id="kefalaiokalyjhs" class="input"></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div style="display: none" class="col-sm-3">
                                    <table class="table mytable">
                                        <thead>
                                        <tr>
                                            <th class="blue" colspan="2" hidden>
                                                Συνοπτική Ανάλυση Παροχών Επενδυτικού Προγράμματος</th>
                                        </tr>
                                        </thead>
                                        <tbody class="nicebox output">
                                        <tr>
                                            <td hidden>Ηλικία κατά την έναρξη</td>
                                            <td hidden><input type="text" id="hlikiakatathnenarjhe" class="input"></td>
                                        </tr>
                                        <tr>
                                            <td hidden>Πρωτοετές μηνιαίο ασφάλιστρο</td>
                                            <td hidden>
                                                <input type="text" id="prwtoetesmhniaioasfalistroe" class="input">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td hidden>Διάρκεια προγράμματος</td>
                                            <td hidden>
                                                <input type="text" id="diarkeiaprogrammatose" class="input">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td hidden>Ηλικία στην λήξη</td>
                                            <td hidden>
                                                <input type="text" id="hlikiasthnlhjhe" class="input">
                                            </td>
                                        </tr>
                                        <tr style="color: white;" class="blue" hidden>
                                            <td style="border-right-width: 1px;border-color: black" hidden>Αξία λογαριασμού στην λήξη</td>
                                            <td>
                                                <input style="color: white" type="text" id="ajialogariasmousthnlhjhe" class="input">
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-sm-6">
                                    <table class="table mytable">
                                        <thead>
                                        <tr>
                                            <th style="background-color:green;color: white" colspan="2">
                                                Συνοπτική Ανάλυση Παροχών Οικογενειακής Προστασίας</th>
                                        </tr>
                                        </thead>
                                        <tbody class="nicebox output">
                                        <tr>
                                            <td>Ηλικία κατά την έναρξη</td>
                                            <td>
                                                <input type="text" id="hlikiakatathnenarjhp" class="input">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Πρωτοετές μηνιαίο ασφάλιστρο</td>
                                            <td>
                                                <input type="text" id="prwtoetesmhniaioasfalistrop" class="input">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Διάρκεια προγράμματος</td>
                                            <td>
                                                <input type="text" id="diarkeiaprogrammatosep" class="input">
                                            </td>
                                        </tr>
                                        <tr style="color: white" class="green">
                                            <td style="border-right-width: 1px;border-color: black">Καταβαλλόμενο Εφάπαξ σε περίπτωση αποβίωσης</td>
                                            <td>
                                                <input style="color: white" type="text" id="kataballomenoefapajseperiptwshapobiwshs" class="input">
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div style="display: none" class="row">
                                <div class="col-sm-6">
                                    <div class=" canvas"></div>
                                </div>
                                <div style="display: none" class="col-sm-6">
                                    <br>
                                    <br>
                                    <table class="table mytable exceptionBorder">
                                        <thead>
                                        <tr>
                                            <th style="text-align: center;background-color: #b19d37;color:white;" colspan="4" hidden>
                                                Οικονομοτεχνικά στοιχεία προγραμμάτων
                                            </th>
                                        </tr>
                                        <tr>
                                            <!--                                        <th colspan="2">-->
                                            <th hidden style="border-right-width: 1px;border-color: black;" class="blue" colspan="2">
                                                Επενδυτικό Πρόγραμμα</th>
                                            <th hidden style="border-right-width: 1px;border-color: black;" class="green" colspan="2">
                                                Προστασία Οικογένειας</th>
                                        </tr>

                                        </thead>

                                        <tbody class="output nicebox">
                                        <tr>
                                            <td hidden style="border-right-width: 1px;border-color: black;">Συνολικά καταβληθέντα ασφάλιστρα</td>
                                            <td hidden style="border-right-width: 1px;border-color: black;">
                                                <input type="text" id="sinolikakatablhthentaasfalistrae" class="input">
                                            </td>
                                            <td style="border-right-width: 1px;border-color: #a14949">Συνολικά καταβληθέντα ασφάλιστρα</td>
                                            <td>
                                                <input type="text" id="sinolikakatablhthentaasfalistrap" class="input">
                                            </td>
                                        </tr>
                                        <tr style="background-color: gold" hidden>
                                            <td hidden style="border-right-width: 1px;border-color: black;" colspan="3">Συνολικά καταβληθέντα ασφάλιστρα προγραμμάτων</td>
                                            <td hidden>
                                                <input type="text" id="sinolikakatablhthentaasfalistraprogrammatwn" class="input">
                                            </td>
                                        </tr>
                                        <tr style="background-color: yellowgreen" hidden>
                                            <td style="border-right-width: 1px;border-color: black" colspan="3">Αξία επενδυτικού λογαριασμού στην λήξη</td>
                                            <td hidden>
                                                <input type="text" id="ajiaependytikoulogariasmousthnlhjh" class="input">
                                            </td>
                                        </tr>
                                        <tr style="background-color: salmon" hidden>
                                            <td hidden style="border-right-width: 1px;border-color: black" colspan="3">Σύγκριση οικονομικού αποτελέσματος</td>
                                            <td hidden>
                                                <input type="text" id="sigkrisioikonomikouapotelesmatos" class="input">
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    </div>
</main>

</body>
<script src="assets/js/bootstrap.bundle.js"></script>
</html>
<%
if ( session.getAttribute("consultantObj2021") == null ) {
	request.setAttribute("message", "You are not authorized to access this resource. Please login.");
%>
	<jsp:forward page="login.jsp"/>  
<%}%>


<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Close Customer</title>

    <!-- Bootstrap v4.4.1 -->
    <link rel="stylesheet" type="text/css" href="assets/vendor/bootstrap/css/bootstrap.min.css">

    <!-- favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/logos/favicon.jpg">

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
<body class="bg-light">
<%@include file="header.jsp"%>
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <a href="landingpage.html"><div class="text-center mt-2">
                    <img class="mb-2" src="assets/img/logos/logo.jpg" alt="" width="100" height="100">
                </div></a>
                <h1 class="text-center">Close Customer</h1>
                <hr>
                <% int flag = 0;%>

                
               
              
                <!-- error fullname -->
                <%if (request.getAttribute("error1") != null && request.getAttribute("error2") != null){%>
                    <div id="alert_error_message" class="alert alert-danger">
                    Παρακαλώ ελένξτε τα πεδία: <br>
                    <br>
                    *Το <b>Email</b> είναι υποχρεωτικό.<br> 
                    *To <b>Τηλέφωνο</b> είναι υποχρεωτικό και πρέπει να αποτελείται από <b>10</b> χαρακτήρες.<br>
                    </div>
                    
                    <%flag = 1;%>
                <%}%>
                <!-- only phone -->
                <% if (flag != 1 && request.getAttribute("error1") != null){%> 
                    <div id="alert_error_message" class="alert alert-danger">
                    Παρακαλώ ελένξτε: <br>
                    <br>
                    *Το <b>Email</b> είναι υποχρεωτικό.<br> 
                    </div>
                    <%flag = 1;%>
                <%}%>
                <!-- only email -->
                <% if (flag != 1 && request.getAttribute("error2") != null ){%> 
                    <div id="alert_error_message" class="alert alert-danger">
                        Παρακαλώ ελένξτε: <br>
                        <br>
                        *Το <b>Τηλέφωνο</b> είναι υποχρεωτικό και πρέπει να αποτελείται από <b>10</b> χαρακτήρες.<br><br> 
                        </div>
                        <%flag = 1;%>
                <%}%>

                <!-- registration done ! -->
                <% if(flag == 0 && request.getAttribute("success_register") != null) { %>		
                    <div class="alert alert-success text-center" role="alert"><%=(String)request.getAttribute("success_register") %></div>
                <% } %>
                
                <form id="register_form" action="closecustomercontroller.jsp" method="POST">
                    <p class="lead">Μπορείτε να προσθέσετε τον νέο πελάτη !</p>
                    <div>
                    <!-- <%if (request.getAttribute("error") != null && (request.getAttribute("error").equals("errorRegister"))) {
                    } else {
                        %>
                        collapse
                        <%
                    }
                    %> -->
                    <!-- " role="alert"> -->
                        <!-- <i class="fa fa-exclamation-triangle"></i>
                        Παρακαλώ ελένξετε τα παρακάτω : </br>
                        <br>
                        <%if (request.getAttribute("error1") != null && request.getAttribute("error1").equals("")) {
                        %>
                        <i class="fa fa-exclamation-triangle"></i>
                        * Το <b>Ονοματεπώνυμο </b> πρέπει να συμπληρωθεί
                        <br>
                        <%
                            }
                        %>
                        <%if (request.getAttribute("error2") != null && request.getAttribute("error2").equals("")) {
                        %>
                        <i class="fa fa-exclamation-triangle"></i>
                        * Το <b>Email </b> πρέπει να συμπληρωθεί
                        <br>
                        <%
                            }
                        %>
                        <%if (request.getAttribute("error3") != null) {
                        %>
                        <i class="fa fa-exclamation-triangle"></i>
                        * Ο <b>Αριθμός τηλεφώνου </b> πρέπει να συμπληρωθεί και να αποτελείται από 10 χαρακτήρες 

                        <br>
                        <%
                            }
                        %> -->
                    </div>
                    <div class="mb-3">
                        <label for="fullname">Ονοματεπώνυμο</label>
                        <input type="text" class="form-control" id="fullname" name="fullname" maxlength="50"
                            placeholder="Ονοματεπώνυμο">
                        <div id="fullname_error_message" class="text-danger"></div>
                    </div>
                    <div class="mb-3">
                        <label for="email">Email*</label>
                        <input type="email" class="form-control" id="email" name="email" maxlength="100"
                            placeholder="Email">
                        <div id="email_error_message" class="text-danger"></div>
                    </div>
                    <div class="mb-3">
                        <label for="phone">Τηλέφωνο*</label>
                        <input type="phone" class="form-control" id="phone" name="phone" maxlength="100"
                            placeholder="Τηλέφωνο">
                        <div id="phone_error_message" class="text-danger"></div>
                    </div>
                    <div class="mb-3">
                        <label>Φύλο</label>
                        <select name="gender" id="gender" class="form-select">
                            <option value="" hidden>Φύλο</option>
                            <option>Female</option>
                            <option>Male</option>
                            
                        </select>
                        <div id="gender_error_message" class="text-danger"></div>
                    </div>
                    <div class="mb-3">
                        <label>Κατηγορία Επενδυτικού Προφίλ</label>
                        <select name="investmentprofile" id="investmentprofile" class="form-select">
                            <option value="" hidden>Κατηγορία Επενδυτικού Προφίλ</option>
                            <option>Επιθετικό</option>
                            <option>Ισορροπημένο</option>
                            <option>Συντηρητικό</option>
                        </select>
                        <div id="gender_error_investmentprofile" class="text-danger"></div>
                    </div>
                    <div class="mb-3">
                        <label for="Markets">Σχόλιο για το ασφαλιστικό εργαλείο Markets</label>
                        <textarea type="Markets" class="form-control" id="Markets" name="Markets" rows="3"
                                  placeholder="Περιγραφή"></textarea>
                        <div id="Markets_error_message" class="text-danger"></div>
                    </div>
                    <div class="mb-3">
                        <label for="Savings">Σχόλιο για το ασφαλιστικό εργαλείο Savings</label>
                        <textarea type="Savings" class="form-control" id="Savings" name="Savings" rows="3"
                                  placeholder="Περιγραφή"></textarea>
                        <div id="Savings_error_message" class="text-danger"></div>
                    </div>
                    <div class="mb-3">
                        <label for="Pension">Σχόλιο για το ασφαλιστικό εργαλείο Pension</label>
                        <textarea type="Pension" class="form-control" id="Pension" name="Pension" rows="3"
                                  placeholder="Περιγραφή"></textarea>
                        <div id="Pension_error_message" class="text-danger"></div>
                    </div>
                    <div class="mb-3">
                        <label for="Description">Σύντομη περιγραφή για τον πελάτη</label>
                        <input type="Description" class="form-control" id="Description" name="Description" maxlength="50"
                            placeholder="Περιγραφή">
                        <div id="Description_error_message" class="text-danger"></div>
                    </div>

                    <hr class="mb-4">
                    <input type="hidden" name="action" id="action" value="register_user">
                    <button style="border-radius: unset!important;" class="btn btn-primary btn-lg btn-block" type="submit">Register</button>
                    
                    <!-- <div class="mt-2">
                        <p><a href="login.jsp">Already registered? Click here to login.</a></p>
                    </div> -->
                </form>
            </div>
        </div>
    </div>
</main>

    <!-- JQuery-3.4.1 -->
    <script src="assets/vendor/jquery/jquery-3.6.0.min.js"></script>
    <script src="../assets/vendor/bootstrap/js/bootstrap.js"></script>
</body>
</html>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>EGM - Register</title>

    <!-- Bootstrap v4.4.1 -->
    <link rel="stylesheet" type="text/css" href="assets/vendor/bootstrap/css/bootstrap.min.css">

    <!-- favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/logos/favicon.jpg">

</head>

<body class="bg-light">

    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <a href="landingpage.html"><div class="text-center mt-2">
                    <img class="mb-2" src="assets/img/logos/logo.jpg" alt="" width="100" height="100">
                </div></a>
                <h1 class="text-center">Register</h1>
                <hr>
                <form id="register_form" action="registerController.jsp" method="POST">
                    <p class="lead">You can register an account here to login.</p>
                    <div id="alert_error_message" class="alert alert-danger collapse" role="alert">
                        <i class="fa fa-exclamation-triangle"></i>
                        Please check in on some of the fields below.
                    </div>
                    <div id="alert_sucess_message" class="alert alert-success collapse" role="alert">
                        New user successfully created. <a href="login.jsp" class="alert-link">Click here to login.</a>
                    </div>
                    <div class="mb-3">
                        <label for="fullname">Full Name *</label>
                        <input type="text" class="form-control" id="fullname" name="fullname" maxlength="50"
                            placeholder="Enter full name">
                        <div id="fullname_error_message" class="text-danger"></div>
                    </div>
                    <div class="mb-3">
                        <label for="username">Username *</label>
                        <input type="text" class="form-control" id="username" name="username" maxlength="50"
                            placeholder="Enter username">
                        <div id="username_error_message" class="text-danger"></div>
                    </div>
                    <div class="mb-3">
                        <label for="email">Email *</label>
                        <input type="email" class="form-control" id="email" name="email" maxlength="100"
                            placeholder="Enter email">
                        <div id="email_error_message" class="text-danger"></div>
                    </div>
                    <div class="mb-3">
                        <label>Gender *</label>
                        <select name="gender" id="gender" class="form-select">
                            <option value="" hidden>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <div id="gender_error_message" class="text-danger"></div>
                    </div>
                    <div class="mb-3">
                        <label for="password">Password *</label>
                        <input type="password" class="form-control" id="password" name="password" maxlength="50"
                            placeholder="Enter password">
                        <div id="password_error_message" class="text-danger"></div>
                    </div>
                    <div class="mb-3">
                        <label for="confirm_password">Confirm Password *</label>
                        <input type="password" class="form-control" id="confirm_password" name="confirm_password"
                            maxlength="50" placeholder="Enter confirm password">
                        <div id="confirm_password_error_message" class="text-danger"></div>
                    </div>
                    <hr class="mb-4">
                    <input type="hidden" name="action" id="action" value="register_user">
                    <button class="btn btn-primary btn-lg btn-block" type="submit">Register</button>
                    <div class="mt-2">
                        <p><a href="login.jsp">Already registered? Click here to login.</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- JQuery-3.4.1 -->
    <script src="assets/vendor/jquery/jquery-3.6.0.min.js"></script>
</body>
</html>
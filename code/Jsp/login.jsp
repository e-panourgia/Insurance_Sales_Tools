<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>EGM - User Login</title>

  <!-- Bootstrap v4.4.1 -->
  <link rel="stylesheet" type="text/css" href="assets/vendor/bootstrap/css/bootstrap.min.css">

  <!-- favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/logos/favicon.jpg">
</head>

<body class="bg-light">
  <div class="container">
    <div class="row">
      <a href="landingpage.html"><div class="col-md-4 offset-md-4">
        <div class="text-center mt-5">
          <img class="mb-2" src="assets/img/logos/logo.jpg" alt="" width="100" height="100">
        </div></a>
        <h1 class="text-center">User Login</h1>
        <hr>

        <% if(request.getAttribute("message") != null) { %>		
          <div class="alert alert-danger text-center" role="alert"><%=(String)request.getAttribute("message") %></div>
        <% } %>

        <% if(request.getAttribute("success_register") != null) { %>		
          <div class="alert alert-success text-center" role="alert"><%=(String)request.getAttribute("success_register") %></div>
        <% } %>
       
        <form id="login_form" method="post" action="loginController.jsp">
          <span id="login_error_message"></span>
          <div class="mb-3">
            <label for="username">Username *</label>
            <input type="text" class="form-control" id="username" name="username" placeholder="Enter username"
              maxlength="50">
            <div id="username_error_message" class="text-danger"></div>
          </div>
          <div class="mb-3">
            <label for="password">Password *</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter password"
              maxlength="50">
            <div id="password_error_message" class="text-danger"></div>
          </div>
          <hr class="mb-4">
          <input type="hidden" name="action" id="action" value="login_user">
          <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
          <div class="mt-2">
            <p><a href="register.jsp">Do not have an account yet? Register.</a></p>
          </div>
          <div class="col-sm-4"></div>
        </form>
    </div>
    </div>
  </div>
</body>

</html>
{%load static%}

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="TechIns">
  <title>Αγορές</title>

  <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/dashboard/">




  <link href="{%static 'assets/vendor/bootstrap/css/bootstrap.min.css'%}" rel="stylesheet">
  <!-- <link rel="stylesheet" type ="text/css" href="{%static 'assets/css/popup.css'%}"> -->

  <link rel="icon" href="{%static 'assets/img/logos/favicon.jpg'%}" sizes="16x16" type="image/png">
  <meta name="theme-color" content="#7952b3">


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



  <link href="{%static 'assets/css/platform.css'%}" rel="stylesheet">
</head>
<body>
<!-- {% block main-menu %}
<%@include file="header.jsp"%>
{% endblock %} -->
<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">TechIns</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
      <a class="nav-link" href="logout.jsp">Sign out</a>
    </li>
  </ul>
</header>
<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link" href="landingpage.jsp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Landing Page
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="markets.jsp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              Markets
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="ependitiko_profile.jsp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              Investment Profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.jsp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              Pension
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="closecustomer.jsp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              close customer
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Markets</h1>
        <!--        <div class="btn-toolbar mb-2 mb-md-0">-->
        <!--        </div>-->
      </div>
      <div style="border: 1px salmon solid">
        <div class="container">
          <div class="row">
            <div style="padding: 15px;" class="col-xl-3 col-sm-6">
              <h5 class="text-black-50 me-2">Πρώτη Επένδυση: </h5>
            </div>
            <div style="text-align: right;padding: 15px" class="col-xl-3 col-sm-6">
              <input id="number" class="form-control;" type="number" min="1992" max="2000"
                     onfocus=" let value = this.value; this.value = null; this.value=value">
            </div>
            <div style="padding: 15px;" class="col-xl-3 col-sm-6">
              <h5 class="text-black-50 me-2">Ποσό Επένδυσης: </h5>
            </div>
            <div style="text-align: right;padding: 15px" class="col-xl-3 col-sm-6">
              <input id="amount" class="form-control;" type="number" min="50" step="50"
                     onfocus=" let value = this.value; this.value = null; this.value=value">
            </div>
            <div class="row">
              <div style="padding: 15px;" class="col-xl-4 col-sm-6">
                <h5 class="text-black-50 me-2">Διάλεξε Αγορά: </h5>
              </div>

      

              <div style="text-align: right;padding: 15px" class="col-xl-4 col-sm-6">
                <select class="btn btn-secondary" autofocus="autofocus" id="markets">
                  {% for market in markets %}
                    <option value="{{ market.name_market }}">{{ market.name_market }}</option>
                  {% endfor %}
                </select>
              </div>
              <div class="col-xl-4 col-sm-12 paddingForButton">
                <button style="padding: 5px 35px 5px 35px;" type="button" class="calc btn-outline-primary btn-lg btn-outline-secondary">Υπολόγισε</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- add note  -->
      <div class="canvas"></div>

      <div class="numbers">

      </div>
    </main>
  </div>
</div>

<!-- <link rel="stylesheet" type ="text/css" href="{%static 'assets/css/popup.css'%}"> -->
<script src="{%static 'assets/vendor/bootstrap/js/bootstrap.bundle.min.js'%}"></script>
<script src="{%static 'assets/js/markets_info.js'%}"></script>
<script src="{%static 'assets/vendor/jquery/jquery-3.6.0.min.js'%}"></script>
<script src="{%static 'assets/vendor/feather/feather.min.js'%}"></script>
<script src="{%static 'assets/js/Chart.min.js'%}"></script>
<script src="{%static 'assets/js/specific_markets.js'%}"></script>
</body>
</html>

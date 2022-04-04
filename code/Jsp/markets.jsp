<%
if ( session.getAttribute("consultantObj2021") == null ) {
	request.setAttribute("message", "You are not authorized to access this resource. Please login.");
%>
	<jsp:forward page="login.jsp"/>  
<%}%>


<%@ page contentType="text/html; charset=utf-8" %>
<%@ page import="Insurance.*,java.util.List" %>



<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="TechIns">
  <title>Αγορές</title>

  <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/dashboard/">




  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


  <link rel="icon" href="assets/img/logos/favicon.jpg" sizes="16x16" type="image/png">
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



  <link href="assets/css/platform.css" rel="stylesheet">
</head>
<body>

<%@include file="header.jsp"%>

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
                  <option value="Nasdaq">Nasdaq</option>
                  <option value="FTSE">FTSE</option>
                  <option value="Dax">Dax</option>
                  <option value="MSCI">MSCI</option>
                  <option value="WGBI">WGBI</option>
                  <option value="Χρηματιστήριο Αθηνών">Χρηματιστήριο Αθηνών</option>
                  <option value="Nikkei">Nikkei</option>
                  <option value="Dow Jones">Dow Jones</option>
                  <option value="S&P 500">S&P 500</option>
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


<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/markets_info.js"></script>
<script src="assets/vendor/jquery/jquery-3.6.0.min.js"></script>
<script src="assets/vendor/feather/feather.min.js"></script>
<script src="assets/js/Chart.min.js"></script>
<script src="assets/js/specific_markets.js"></script>
</body>
</html>


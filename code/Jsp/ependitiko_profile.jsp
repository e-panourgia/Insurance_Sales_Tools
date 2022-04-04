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
    <title>Επενδυτικό Προφίλ</title>
  <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/dashboard/">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/css/popup.css" rel="stylesheet">
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
      <div class="product">
        <span class="helper"></span>
        <div>
          <div style="display: none" class="popupCloseButton">&times;</div>
          <h4 class="removeLater">Υπολογισμός επενδυτικού προφίλ</h4>
          <p class="removeLater">
            Παρακαλώ περιμένετε!
          </p>
          <div id="mySpinner">
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div>
            </div>
          </div>
          <h4 style="display: none" id="synt">Προφίλ σου είναι <span style="color: red">Συντηρητικό</span>. Επικοινώνησε μαζί μου
            για να βρούμε πως να καλύψουμε τις ανάγκες σου</h4>
          <h4 style="display: none" id="isor">Προφίλ σου είναι <span style="color: red">Ισορροπημένο</span>. Επικοινώνησε μαζί μου
            για να βρούμε πως να καλύψουμε τις ανάγκες σου</h4>
          <h4 style="display: none" id="epi">Προφίλ σου είναι <span style="color: red">Επιθετικό</span>. Επικοινώνησε μαζί μου
            για να βρούμε πως να καλύψουμε τις ανάγκες σου</h4>
        </div>

      </div>
      <div class="">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Επενδυτικό Προφίλ</h1>
                  <div class="btn-toolbar mb-2 mb-md-0">
                  </div>
        </div>


        <%
          InvestmentProfileService service = new InvestmentProfileService();
          List<InvestmentProfile> profile = service.getQuetionsAndAnswers();
            int counter_js = 0;
            for (Insurance.InvestmentProfile profilee: profile) {
            counter_js += 1;
        %>
        <div class="form-check">
          <h3 class="descriptionLabel"><%=counter_js%><%="."%><%=profilee.getQuetion() %> <br></h3>
          <%if (counter_js == 10) { %>
          <img src="assets/img/ependitiko/epend-1.jpg" style="width:100%;">
          <%}%>

          <%if(counter_js == 11) { %>
          <img src="assets/img/ependitiko/epend-2.jpg" style="width:100%;"> 
          <%}%>
          
          <label>
            <input type="checkbox" class="form-check-input" value='1' name="ans<%=counter_js%>"><%=profilee.getAnswer1() %></label><br>
          <label>
            <input type="checkbox" class="form-check-input" value='4' name="ans<%=counter_js%>"><%=profilee.getAnswer2() %></label><br>
          <label>
            <input type="checkbox" class="form-check-input" value='10' name="ans<%=counter_js%>"><%=profilee.getAnswer3() %>	<br></label>
        </div>
<%
	}
%>
        <div class="text-center">
          <button style="border-radius: 0 !important;" class="btn btn-primary calculate-button">Υπολόγισε</button>
        </div>
      </div>
    </main>
</div>
</div>
</body>
<script src="assets/vendor/jquery/jquery-3.6.0.min.js"></script>
<script src="assets/vendor/feather/feather.min.js"></script>
<script src="assets/js/calculation.js"></script>
</html>

<%
  session.invalidate();
  request.setAttribute("success_message", "Logout successfully!");
%>
<jsp:forward page="landingpage.jsp" />
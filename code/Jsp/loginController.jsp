<%@ page contentType="text/html; charset=utf-8" %>
<%@ page import="Insurance.*" %>

<%
if ( session.getAttribute("consultantObj2021") == null ) {
	request.setAttribute("message", "You are not authorized to access this resource. Please login.");
%>
	<jsp:forward page="login.jsp"/>  
<%}%>
<!-- Read parameters -->
<%
String username = request.getParameter("username");
String password = request.getParameter("password");
ConsultantDAO consultantdao = new ConsultantDAO();  

try {
    Consultant consultant = consultantdao.authenticate(username,password);
    session.setAttribute("consultantObj2021", consultant);
%>
    <jsp:forward page="ependitiko_profile.jsp" />  
<%
} catch(Exception e) {
  
      request.setAttribute("message", e.getMessage());
%>
  <jsp:forward page="login.jsp" />
<%
  }
%>
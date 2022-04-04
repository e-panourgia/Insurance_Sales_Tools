<%
if ( session.getAttribute("consultantObj2021") == null ) {
	request.setAttribute("message", "You are not authorized to access this resource. Please login.");
%>
	<jsp:forward page="login.jsp"/>  
<%}%>
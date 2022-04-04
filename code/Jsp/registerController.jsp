<%@ page language="java" contentType="text/html; 
charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="Insurance.*" %>



<%
    String name = request.getParameter("fullname");
    String username = request.getParameter("username");
    String email = request.getParameter("email");
    String gender = request.getParameter("gender");
    String password = request.getParameter("password");
    String confirm = request.getParameter("confirm_password");
    ConsultantDAO dao = new ConsultantDAO();
    
// convert to UTF-8 to support Greek characters
if (name != null) {
	name = new String(name.getBytes("ISO-8859-1"), "UTF-8");
}

if (username != null) {
	username = new String(username.getBytes("ISO-8859-1"), "UTF-8");
}

//name && surname check all acceptable conditions 
if (name.length() >= 6 && username.length() >= 3  && password.length() >= 6 &&  password.equals(confirm)) {        
    Consultant obj = new Consultant(name,username,email, gender, password);
    dao.register(obj);
%>   

<%request.setAttribute("success_register", "Registration done, please enter username and password for log-in");%>
<!-- success message -->

<%        
    } else {     
%>
<!-- addd alerttppedia not acceptable -->
<jsp:forward page="login.jsp" />
<%        
    }     
%>
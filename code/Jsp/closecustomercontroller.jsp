<%
if ( session.getAttribute("consultantObj2021") == null ) {
	request.setAttribute("message", "You are not authorized to access this resource. Please login.");
%>
	<jsp:forward page="login.jsp"/>  
<%}%>


<%--<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>--%>
<%@ page import="Insurance.*" %>

<!-- read parameters -->
<%
    String fullname = request.getParameter("fullname");
    String email = request.getParameter("email");
    String phone = request.getParameter("phone");
    String gender = request.getParameter("gender");
    String investmentprofile = request.getParameter("investmentprofile");
    String Markets = request.getParameter("Markets");
    String Savings = request.getParameter("Savings");
    String Pension = request.getParameter("Pension");
    String Description = request.getParameter("Description");
    CustomerService customer = new CustomerService();
%>

<!-- false conditions -->


<!-- It is necessary to put phone and email to be done register! -->
<!-- error2 null email -->
<% if(email.length() == 0){
    request.setAttribute("error1", "Εmail");
} %>
<!-- error3 null phone or phone <- 10 characters -->
<% if(phone == null || phone.length() < 10 || phone.length() > 10){
    request.setAttribute("error2", "Τηλέφωνο");
} %>


<!-- convert greek -->
<%

if (fullname != null) {
	fullname = new String(fullname.getBytes("ISO-8859-1"), "UTF-8");
}

if (investmentprofile != null) {
	investmentprofile = new String(investmentprofile.getBytes("ISO-8859-1"), "UTF-8");
}

if (Markets != null) {
	Markets = new String(Markets.getBytes("ISO-8859-1"), "UTF-8");
}

if (Savings != null) {
	Savings = new String(Savings.getBytes("ISO-8859-1"), "UTF-8");
}


if (Pension != null) {
	Pension = new String(Pension.getBytes("ISO-8859-1"), "UTF-8");
}


if (Description != null) {
	Description = new String(Description.getBytes("ISO-8859-1"), "UTF-8");
}

if (gender != null) {
    gender = new String(gender.getBytes("ISO-8859-1"), "UTF-8");
}


%>



<!-- condition of success -->
<%
if (phone.length() == 10 && phone != null && fullname != null && email != null){
    Customer obj = new Customer(fullname, email, phone, gender, investmentprofile, Markets, Savings, Pension, Description );
    try {
        customer.register(obj);
    } catch(Exception e) { 
        request.setAttribute("error", "errorRegister");
    }
    request.setAttribute("success_register", "Επιτυχημένη εγγραφή!");
%>
<jsp:forward page="closecustomer.jsp"/>
<%}%>
<jsp:forward page="closecustomer.jsp"/>
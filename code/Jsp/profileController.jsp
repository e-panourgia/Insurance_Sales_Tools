<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="Insurance.*,java.util.List" %>

<%
InvestmentProfileService service = new InvestmentProfileService();
List<InvestmentProfile> profile = service.getQuetionsAndAnswers();

	for (InvestmentProfile profilee: profile) {
%>
		<%=profilee.getQuetion() %> <br>
        <%=profilee.getAnswer1() %>	<br>
        <%=profilee.getAnswer2() %>	<br>
        <%=profilee.getAnswer3() %>	<br>
<%
	}
%>					


				

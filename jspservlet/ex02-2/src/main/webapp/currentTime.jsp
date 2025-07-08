<%--
  Created by IntelliJ IDEA.
  User: student
  Date: 25. 5. 29.
  Time: 오전 10:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.Date"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>현재 날짜 출력 실습</h1>
<%
Date d=new Date();
Date d2=null;
%>
현재 날짜 : <%= d %>, <%= d2 %>
</body>
</html>


<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" import="java.util.*" %>
<html>
<head>
  <title>Title</title>
</head>
<body><%--에러 메세지 출력 jstl--%>
<h4><c:out value="${exception.getMessage()}"></c:out></h4>

<ul><%--에러 메세지 출력 jstl--%>
  <c:forEach items="${exception.getStackTrace()}" var="stack">
    <li><c:out value="${stack}"></c:out></li>
  </c:forEach>
</ul>
</body>
</html>

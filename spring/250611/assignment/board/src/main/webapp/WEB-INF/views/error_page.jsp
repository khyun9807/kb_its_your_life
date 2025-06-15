<%--
  Created by IntelliJ IDEA.
  User: student
  Date: 25. 6. 11.
  Time: 오후 10:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" import="java.util.*" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
  <h4><c:out value="${exception.getMessage()}"></c:out></h4>

  <ul>
    <c:forEach items="${exception.getStackTrace()}" var="stack">
      <li><c:out value="${stack}"></c:out></li>
    </c:forEach>
  </ul>
</body>
</html>

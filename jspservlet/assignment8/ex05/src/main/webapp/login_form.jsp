<%--
  Created by IntelliJ IDEA.
  User: kkh98
  Date: 25. 6. 4.
  Time: 오후 9:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Title</title>
  </head>
  <body>
    <form action="login" method="get">
      <fieldset>
        <legend>로그인 폼</legend>
          <ul style="list-style: none;">
            <li>
              <label for="userid">ID</label>
              <input type="text" id="userid" name="userid">
            </li>
            <li>
              <label for="passwd">PW</label>
              <input type="password" id="passwd" name="passwd">
            </li>
            <li>
              <input type="submit" value="전송">
            </li>
          </ul>
      </fieldset>
    </form>

  </body>
</html>

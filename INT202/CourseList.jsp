<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="sit.int202.mvcdemo.model.Semester" %>
<html>
<head>
    <title>Registration</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
<div class="container mt-2">
    <p class="h2">Course Registration::</p>
    <hr>
    Select Semester:
    <select name="subjects">
        <c:forEach items="${Semester.allSemesterText}" var="s">
            <option>${s}</option>
        </c:forEach>
    </select>
    <c:forEach begin="1" end="10">
        <div class="row bg-light my-2 py-2">
            <div class="col-1">INT101</div>
            <div class="col-3">Java Programming</div>
            <div class="col-1">3.0</div>
            <div class="col-1"><input type="checkbox"></div>
        </div>
    </c:forEach>
</div>
</body>
</html>

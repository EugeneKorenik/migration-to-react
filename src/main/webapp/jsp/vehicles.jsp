<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
    <head>
        <link type="stylesheet" href="css/vehicles.css" />
    </head>
    <body>
        <div id="vehicles">
            <h1>List of all vehicles </h1>
            <c:forEach var="vehicle" items="${vehicles}">
                <div class="vehicle">
                    <p>Producer: ${vehicle.producer}</p>
                    <p>Model: ${vehicle.model}</p>
                    <p>Price: ${vehicle.price}</p>
                </div>
            </c:forEach>
        </div>
        <a href="/">To main page</a>
    </body>
</html>
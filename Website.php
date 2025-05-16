<?php
header("Content-Type: text/html; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = htmlspecialchars(trim($_POST["name"]));
    $email    = htmlspecialchars(trim($_POST["email"]));
    $company  = htmlspecialchars(trim($_POST["company"]));
    $message  = htmlspecialchars(trim($_POST["message"]));

    $name = htmlentities($name);
    $email = htmlentities($email);
    $company = htmlentities($company);

    echo "<div style='color: green;'>";
    echo "<h2>Thank you, $name!</h2>";
    echo "<p>We’ve received your request interest to become our partner from <strong>$company</strong>.</p>";
    echo "<p>We'll reach out to you shortly at <strong>$email</strong>.</p>";
    echo "<p><a href='services.html' class='btn btn-success mt-3'>Back to Services</a></p>";
    echo "</div>";
} else {
    echo "Invalid request";
}
?>
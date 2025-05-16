<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $post = $_POST["post"];
    $resume = $_FILES["resume"];

    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($resume["name"]);

    if (move_uploaded_file($resume["tmp_name"], $targetFile)) {
        echo "Application submitted successfully!";
    } else {
        echo "Failed to upload resume.";
    }
}
?>
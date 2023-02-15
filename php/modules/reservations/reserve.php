<?php

require "../../configuration/db.configuration.php";

$reserverFirstName = $_POST['fname'];
$reserverLastName = $_POST['lname'];
$reserverEmail = $_POST['email'];
$reserverPhone = $_POST['phone'];
$numGuests = $_POST['guests'];
$reserveType = $_POST['type'];
$reserveDate = $_POST['date'];
$reserveReq = $_POST['other'];

mysqli_query($db_connection, "insert into reservations (reserver_first_name, reserver_last_name, reserver_email, reserver_phone, num_guests, reservation_type, reservation_date, reservation_requests) values ('$reserverFirstName', '$reserverLastName', '$reserverEmail', '$reserverPhone', '$numGuests', '$reserveType', '$reserveDate', '$reserveReq')");
print '<script>alert("We will confirm your registration soon")</script>';
header('Location: http://localhost/familybakery/html/index.html');



?>
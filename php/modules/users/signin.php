<?php

require '../../configuration/db.configuration.php';

$signinEmail = $_POST["email"];
$signinPass = $_POST["pass"];

$req = "select * from users where email = '$signinEmail' and password = '$signinPass'";
$res = mysqli_query($db_connection, $req);

if(mysqli_num_rows($res) >= 1){
    echo '<script>alert("You are Logged In")</script>';
    header('Location: http://localhost/familybakery/html/index.html');
}else{
    echo '<script>alert("Invalid email or password")</script>';
    header('Location: http://localhost/familybakery/html/signin.html');
}

mysqli_close($db_connection);

?>
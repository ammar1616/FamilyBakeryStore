<?php 

require "../../configuration/db.configuration.php";

$signupFirstName = $_POST['fname'];
$signupLasttName = $_POST['lname'];
$signupEmail = $_POST['email'];
$signupPass = $_POST['pass'];
$signupPhone = $_POST['phone'];

if($signupFirstName != "" && $signupLasttName != "" && $signupEmail != "" && $signupPass != "" && $signupPhone != "" && filter_var($signupEmail, FILTER_VALIDATE_EMAIL)){
    $req = "select * from users where email = '$signupEmail'";
    $res = mysqli_query($db_connection, $req) or die(mysql_error($db_connection));

    if(mysqli_num_rows($res) >= 1){
        print '<script>alert("This email is already taken")</script>';
        // require '../../../html/signin.html';
        // header('Location: http://localhost/familybakery/html/signin.html');
    }else{
        mysqli_query($db_connection, "insert into users (first_name, last_name, email, password, phone) values ('$signupFirstName', '$signupLasttName', '$signupEmail', '$signupPass', '$signupPhone')");
        // require 'C:/xampp/htdocs/familybakery/html/signin.html';
        echo '<script>alert("Wohooo!! You can log in now")</script>';
        header('Location: http://localhost/familybakery/html/signin.html');
        
    }
}

mysqli_close($db_connection);

?>
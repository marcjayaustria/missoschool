<?php

$servername = "localhost";      
$username   = "root";           
$password   = "";                
$dbname     = "login";           


$conn = new mysqli($servername, $username, $password, $dbname);


$conn->set_charset("utf8");

if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);
}


?>

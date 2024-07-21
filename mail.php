<?php

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "maykhine.mks@gmail.com";
$mail->Password = "kmvj gtos banu blvw";

$mail->setFrom($email, $name);
$mail->addAddress("maykhine.mks@gmail.com", "May Khine Soe");

$mail->Body = $message;

$mail->SMTPDebug = 2;

$mail->send();

echo "message sent successfully";
header("location:sent.html");
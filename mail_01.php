<?php

$recepient = "info@inoutlabs.es";
$sitename = "InOutLabs";

$subject   = "Message from  \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);

$message = "
Name: $name <br>
Phone: $phone <br>
Message: $message <br>
";

mail($recepient, $subject, $message, "From: info@inoutlabs.es" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");

$subject2 = "Thank you for contacting!";
$message2 = "Hello! <br><br>You have filled the feedback form on the site: www.InOutLabs.es<br><br>
In the near future, our managers will call you back.<br><br>
THANK YOU!
<br><br>
Our phone: +34 999 00 00 00<br>
";

mail($email, $subject2, $message2, "From: info@inoutlabs.es" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
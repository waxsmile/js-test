<?php

$frm_name  = "Youname";
$recepient = "smilewax@mail.ru";
$sitename  = "Учебный: Armata Financical Group";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$formname = trim($_POST["formname"]);
//$formname = trim($_POST["formname"]);

$message = "
Форма: $formname <br>
E-mail: $email <br>
Имя: $phone
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");

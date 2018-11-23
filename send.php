<?php

$sendto   = "evgen.webcat@gmail.com"; // почта, на которую будет приходить письмо

    $username = $_POST['name'];
    $usertel = $_POST['tel'];
    $mail = $_POST['mail'];
    $options = $_POST['options'];
    $social = $_POST['social'];
    $participation = $_POST['participation'];



	// Формирование заголовка письма
	$subject  = "Регистрация нового участника.".' '.$sourse.' '.$os;
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

	// Формирование тела письма
	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Регистрация нового участника.</h2>\r\n";
    $msg .= "<p><strong>ФИО:</strong> ".$username."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
    $msg .= "<p><strong>E-MAIL:</strong> ".$mail."</p>\r\n";
    $msg .= "<p><strong>Параметры:</strong> ".$options."</p>\r\n";
    $msg .= "<p><strong>Ссылка на соц сети:</strong> ".$social."</p>\r\n";
    $msg .= "<p><strong>Участие в конкурсах:</strong> ".$participation."</p>\r\n";
	$msg .= "</body></html>";


	// отправка сообщения

	@mail($sendto, $subject, $msg, $headers);

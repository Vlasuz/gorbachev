<?php 
	
	// Переменные

	$name = $_POST['name'];  // $переменная =  $_POST[' name которое указали в форме ']
	$phone = $_POST['phone']; // $переменная =  $_POST[' name которое указали в форме ']
	$email = $_POST['email']; // $переменная =  $_POST[' name которое указали в форме ']

	// Переменные
	
	

	// Сообщение для почты

	$message_all = 					// Переменная для сообщения которое будет приходить на почту
	"Была заказана консультация на сайте Gorbachev Investments.\nДанные пользователя:" . 
	"\n\nИмя: " . $name.
	"\nТелефон: " . $phone.
	"\nE-mail: " . $email;

	// Сообщение для почты



	// Отправка на почту

	$ok = mail('gorbachev.agency@gmail.com', 'Заказ консультации с Gorbachev Investments', $message_all); // mail('На какую почту отправлять', 'Тема сообщения', 'Сообщение'); 

	// Отправка на почту



	// Проверка отправки на почту

	if ($ok){
		echo 'Сообщение отправлено!';
		sleep(2); // Задержка 2 секунды
		header('Location: ' . $_SERVER['HTTP_REFERER']); // Перенаправление на ту страницу, с которой было отправлена форма
	}else{
		echo 'Фэйл(((';
	}

	// Проверка отправки на почту
 ?>
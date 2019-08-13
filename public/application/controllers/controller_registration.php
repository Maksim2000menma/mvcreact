<?php

class Controller_Registration extends Controller
{

	function __construct()
	{
		session_start();
		$this->model = new Model_Registration();
		$this->view = new View();
	}

	function action_index()
	{
		//если нажата кнопка submit то отправить все в модель
		if(isset($_POST['submitadd'])){
			$last_name = $_POST['last_name'];
			$first_name = $_POST['first_name'];
			$login = $_POST['login'];
			$password = $_POST['password'];
			$description = $_POST['description'];
			$address = $_POST['address'];
			$date_b = $_POST['date_b'];

			$this->model->CreateUser($last_name, $first_name, $login, $password, $description, $address, $date_b);
			header('Location:/list/');
			var_dump($last_name, $first_name, $login, $password, $description, $address, $date_b);//вывод информации о переменной
		}

		$this->view->generate('registration_view.php', 'template_view.php');
	}
}

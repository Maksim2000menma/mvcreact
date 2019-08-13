<?php

class Controller_List extends Controller
{

	function __construct()
	{
		session_start();

		$this->model = new Model_List();//подключение модели
		$this->view = new View();
	}

	function action_index()
	{
		$data = $this->model->GetInfo();

		$this->view->generate('list_view.php', 'template_view.php', $data);
	}
}

<?php

class Controller_Logout extends Controller{

  function action_index()
	{
		session_start();
		session_destroy();//удаление всех данных из сессии при выходе
		header('Location:/main/');
	}
}

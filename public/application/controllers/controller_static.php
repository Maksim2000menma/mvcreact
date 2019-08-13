<?php

class Controller_Static extends Controller
{

	function action_index()
	{
		session_start();

		$this->view->generate('static_view.php', 'template_view.php');
	}
}

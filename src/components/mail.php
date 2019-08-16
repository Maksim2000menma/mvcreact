<?php
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);
 echo 'sss';
print_r($input);

echo is_array($input) ? 'Массив' : 'Не массив';
echo "\n";
 ?>

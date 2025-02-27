<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$url = $_GET['url'];

$response = file_get_contents($url);

if (!$response) {
    die('Не удалось загрузить файл по URL: ' . $url); 
}

$filename = pathinfo($url, PATHINFO_FILENAME); 

$name = preg_replace('/UI_Emblems_/','', $filename);
$name = preg_replace('/_large/','', $name) . ".png";

$file = fopen("../img/emblems/" . $name, 'wb');         
fwrite($file, $response);
fclose($file);

header('Content-Type: ' . mime_content_type("../img/emblems/" . $name));   

if (filesize("../img/emblems/" . $name) == 0) {
    die('Ошибка при записи данных в файл'); 
}

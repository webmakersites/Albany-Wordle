<?php

$theme = $_POST['theme'];
$theme = explode(" ", $theme)[1];
setcookie('theme', $theme, time() + 10*365*24*60*60, '/');
echo $theme;
?>
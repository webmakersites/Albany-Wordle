<?php

setcookie('csrf_token', '', time()-300);
$csrf = base64_encode(openssl_random_pseudo_bytes(32));
setcookie('csrf_token', $csrf, time() + 3600, '/');
echo $csrf;

// Getting IP address
if (!empty($_SERVER['HTTP_CLIENT_IP'])){
	//ip from share internet
	$ip = $_SERVER['HTTP_CLIENT_IP'];
} else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
    //ip pass from proxy
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else{
    $ip = $_SERVER['REMOTE_ADDR'];
}

// Getting rough location
$geo = unserialize(file_get_contents("http://www.geoplugin.net/php.gp?ip=$ip"));
$country = $geo["geoplugin_countryName"];
$city = $geo["geoplugin_city"];

// Connect to database
require_once ('mysql_connect.php');

if (strpos($ip, "192.168") === false) {
    $word = $_POST['word'];
    $sql = "INSERT INTO guesses(id, date, ip, country, city, word) VALUES ('$csrf', NOW(), '$ip', '$country', '$city', '$word')";
    $result = mysqli_query($dbc, $sql);
}

?>
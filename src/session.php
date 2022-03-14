<?php

// Connect to database
require_once ('mysql_connect.php');

if ($_POST['token'] == $_COOKIE['csrf_token'] && isset($_POST['guess'])) {
	$guess = $_POST['guess'];
	$count = $_POST['count'];
	$sql = "UPDATE guesses SET `guess$count`='$guess' WHERE id='{$_COOKIE['csrf_token']}'";
	$result = mysqli_query($dbc, $sql);
}

?>
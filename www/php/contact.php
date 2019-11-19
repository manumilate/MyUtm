<?php
DEFINE ('DB_USER', 'root');
DEFINE ('DB_PASSWORD', '');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'utm');

$subject=null;
$email=null;
$message=null;

if(!empty($_GET['subject'])){
	$subject=$_GET['subject'];
}

if(!empty($_GET['email'])){
	$email=$_GET['email'];
}

if(!empty($_GET['message'])){
	$message=$_GET['message'];
}

echo addContact($subject, $email ,$message);

function addContact($sub, $ema, $mess){
	$conn = mysqli_connect (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) OR die ('Could not connect to MySQL: '.mysqli_connect_error());
	$query = "INSERT INTO contactus (subject, email, message) VALUES ('".$sub."', '".$ema."', '".$mess."')";

	if(mysqli_query($conn, $query)){
		echo "Contacted";
	}else{
		echo "Error: " . $query . "" . mysqli_error($conn);
	}
	$conn->close();
}
?>

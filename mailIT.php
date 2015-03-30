<?php
$email = $_POST['email'];
$firstname = $_POST['firstname'];
$phone = $_POST['phone'];
$lastname = $_POST['lastname'];
$company = $_POST['company'];
$base_users = $_POST['base_users'];
$subjectData = $_POST['subject-data'];
$message = $_POST['message'];


$from = "mobilez@site.com";
$headers  = "From: $from\r\n"; 
$headers .= "Content-type: text/html\r\n";
$to = 'info@easyerp.com';
$subject = 'Mobilez365';
$message = '<html><body>Message from EasyERP<br>Firstname: '.$firstname.'<br>Lastname: '.$lastname.'<br>Email: '.$email.'<br>Phone: '.$phone.'<br>Company: '.$company.'<br>Sales team: '.$base_users.'<br>Subject: '.$subjectData.'<br>Message: '.$message.'</body></html>';
$message = wordwrap($message, 70, "\r\n");
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
mail($to, $subject, $message, $headers) or die('Error sending Mail');
} 
?>

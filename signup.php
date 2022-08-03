<?php
$server ="localhost";
$db ="melo";
$user ="root";
$password ="";
$email=$_POST["email"];
$pass=$_POST["password"];
$name=$_POST["name"];
$conn=mysqli_connect($server,$user,$password,$db);
if ($conn){
    $connected="byikoneshe";
}else{
    $connected="byanze";
}
$sql=mysqli_query($conn,"SELECT * FROM artist where email='$email'");
if(mysqli_num_rows($sql)>0)
{
    echo "Email Id Already Exists"; 
	exit;
}
else
{
mysqli_query($conn,"insert into artist(artistname,email,password) values('$name','$email','$pass')");
echo "<h1>Signed Up successfully</h1>";
   
}

?>
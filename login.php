<?php
$server ="localhost";
$db ="melo";
$user ="root";
$password ="";
$email=$_POST["email"];
$pass=$_POST["password"];
$conn=mysqli_connect($server,$user,$password,$db);
if ($conn){
    $connected="byikoneshe";
}else{
    $connected="byanze";
}
$sql=mysqli_query($conn,"SELECT * FROM artist where email='$email' and password='$pass'");
if(mysqli_num_rows($sql)>0)
{
$url="/melo/index.html";
echo "<h1> Logedin successfully</h1>
<a href='$url'>go to home</a>
";
}
else
{
echo "<h1>Invalid Credetials</h1>";
   
}

?>
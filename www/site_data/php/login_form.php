<?php
session_start();
require_once('mysql.php');
$Username = $_POST["username"];
$Password = $_POST["password"];
if (empty($Username)) {
header("Location:/upload");
}
if ($music_db -> connect_errno) {
   echo "Məlumat bazasına qoşulma alınmadı: " . $music_db -> connect_error;
   exit();
 }


$sql = "SELECT * FROM users WHERE User = BINARY '$Username' and Pass = BINARY '$Password'";
if (!$music_db -> query($sql)) {
   echo("Sorğu zamanı daxili xəta: " . $music_db -> error);
   exit();
 }
      $result = mysqli_query($music_db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['active'];
      
      $count = mysqli_num_rows($result);
      
      
		
      if($count == 1) {
         $_SESSION['login'] = TRUE;
         $_SESSION['username'] = $Username;
         echo ('OK');
      }else {
         echo ('Istifadəçi adı və/və ya Şifrə yalnışdır!'); 
      }
   


      $music_db -> close();



?>

<?php
session_start();
if ($_SESSION['login']) {
    header('Location:new-upload.php');
    exit();
}
else {
    header('Location:login.php');
    exit();


}

?>
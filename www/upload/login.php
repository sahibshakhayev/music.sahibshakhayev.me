<?php
session_start();
if ($_SESSION['login']) {
    header('Location:new-upload.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="az-AZ">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sahib Shakhayev's Favorite Music - Daxil Ol</title>
    <link rel="icon" href="/site_data/music.ico"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/site_data/css/login.css"/>
    <script src="/site_data/js/jquery.min.js" type="text/javascript"></script>
    <script src="/site_data/js/login.js" type="text/javascript"></script>
</head>
<body>
<div class="login-body">
<h5 class="header">You Title</h5>
<h5 class="header2">Mahnı Yükləmə - Giriş</h5>
<form enctype="multipart/form-data" method="POST" id="form">
<div class="user-in">
<img src="/site_data/img/username.svg" alt="Username">
<input id="username" autocomplete="username" placeholder="İstifadəçi adı" name="username" type="text">
</div>
<div class="pass-in">
<img src="/site_data/img/password.svg" alt="Password">
<input type="password" placeholder="Şifrə" autocomplete="current-password" name="password" id="password">
</div>
<input id="sub-btn" type="submit" value="DAXİL OL">
</form>
</div>
<div class="msg-box">
<img src="/site_data/img/error-msg-icon.svg" alt="Error Icon">
<p class="msg"></p>
<button id="ok-btn">OK</button>
</div>


</body>
</html>
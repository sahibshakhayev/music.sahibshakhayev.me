# music.sahibshakhayev.me
# Web Music Player with Backend Playlist Load
<br>
<img src='https://github.com/sahibshakhayev/music.sahibshakhayev.me/raw/main/screenshots/1.JPG' alt='Screenshot' width="100%"><img src= 'https://github.com/sahibshakhayev/music.sahibshakhayev.me/raw/main/screenshots/2.JPG' width="100%"  alt='Screenshot'>

This is my first project. If you find errors or have a suggestion. I would be glad to receive an e-mail.<br>
You can freely edit, copy, redistribute the code. 
<br>
<br>
<br>
As a web application, it has two parts, Frontend and Backend.<br>
Frontend consists of <b>HTML</b>, <b>Pure CSS</b> and <b>jQuery</b> as <b>JS</b>. <br>
The backend consists of <b>PHP</b> and <b>MySQL</b> as a database. <br>
 

The following formats are supported for playback: <b>MP3</b>, <b>OGG</b>, <b>AAC</b> and <b>FLAC</b><br>
Supported formats for cover image: <b>JPG,</b> <b>JPEG,</b> <b>PNG,</b> <b>BMP</b> and <b>GIF.</b><br>
Only <b>LRC</b> format is supported for lyrics.<br>
There is support for uploading songs.




<h2>Setup</h2>
<ul>
 <li><b>Copy the contents of the www folder to the root folder of your web server.</b><br>
 If you are using Microsoft IIS and HTTPS you can also copy the web.config file. In this case, you must activate the URL Rewrite module and write your domain in the <i> add input = "{HTTP_REFERER}" pattern = "</i> section. <br>For example, in my case, <i> "add input =" {HTTP_REFERER} "pattern =" ^ https: //music.sahibshakhayev\.me/.*$ "negate =" true"</i> </li>
 <li><b>Set You Title in "index.php", "/upload/login.php", "/upload/new-upload.php"</b><br>
 Project in Azerbaijani
 </li>
 <li>
 <b>Set up your MySQL database</b><br>
 1) Create a database<br> 
 2) Create database user if missing<br>
 3) Give All Privileges to the database user<br>
 </li>
 <li>
  <b>Import tables from the "sql" folder (users.sql and songs.sql) into the database</b>
 <li>
 <b>Open the file "site_data/php/mysql.php" and enter the credentials for your MySQL database</b>
 </li>
</ul><br>

If everything done  correctly you can listen to songs, control playback and see the lyrics of the song.

<h2>How to upload a new song?</h2>
<ul>
<li>
<div><sup>Click on this icon: </sup> <img src="https://raw.githubusercontent.com/sahibshakhayev/music.sahibshakhayev.me/main/www/site_data/img/upload.svg" alt='uoload_icon' /></div>
 </li>
 <li><b>Enter login and password</b><br>
 By default Login: username, Password: Password</li>
 <li><b>In the form that opens, enter the required data and click the submit button</b><br>
 After a successful operation, the track will appear in the playlist<br>
  <br>
  <br>
  
 <img src="https://github.com/sahibshakhayev/music.sahibshakhayev.me/raw/main/screenshots/3.JPG" alt="Upload Form" width="50%" />
<br>
<br>
  
  <h2>Demo:</h2>
  <h3><a href="https://music.sahibshakhayev.me/" target="_blank">music.sahibshakhayev.me</a></h3>
  <br>
  <br>
  <h2>References:</h2>
  <h3><a href="https://www.programmersought.com/article/46195426033/" target="_blank">https://www.programmersought.com/article/46195426033/</a></h3>
  

















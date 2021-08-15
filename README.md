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
 If you are using Microsoft IIS and HTTPS you can also copy the web.config file. In this case, you must activate the URL Rewrite module and write your domain in the '<add input = "{HTTP_REFERER}" pattern = "' section. <br>For example, in my case, '<add input =" {HTTP_REFERER} "pattern =" ^ https: //music.sahibshakhayev\.me/.*$ "negate =" true "/> '  </li>




</ul>












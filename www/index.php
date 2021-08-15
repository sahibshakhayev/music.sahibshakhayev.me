<?php 
?>
<!DOCTYPE html>
<html lang="az-AZ">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You Title</title>
    <link rel="icon" href="site_data/music.ico"/>
    <link rel="stylesheet" href="site_data/css/main.css"/>
    <script src="site_data/js/jquery.min.js" type="text/javascript"></script>
    <script src="site_data/js/main.js" type="text/javascript"></script>
</head>
<body>
 <div class="playlist-body">
  <div class="playlist-bar">
 <h5>Playlist</h5> 
  <img id="close"  src="/site_data/img/close-playlist.svg" alt="Close Playlist"/>
  <img id="left"  src="/site_data/img/close-playlist-m.svg" alt="Close Playlist"/>
</div>
   
  

<ul class="playlist">
 
 </li>   
</ul>
</div>   
<div class="player-body">
<div class="disk">
<img class="cover" src="songs/cover/no-cover.jpg" alt="Cover-Image"/> 
<div class="disk-center">
</div>
</div>
<div class="lrc-show">
<h5 class="chkb">Gözləyin...<br>Yüklənir...</h5>
<ul id="lrc"></ul>
</div>
<div class="bar1">
    <img id="upload"  alt="Yeni Mahnı Yüklə" title="Yeni Mahnı Yüklə" src="/site_data/img/upload.svg"/>
    <img id="volume"  alt="Səs Gücü" title="Səs Gücü" src="/site_data/img/volume.svg"/>
    </div>
<div class="bar2">
<img id="playlist"  alt="Playlist" title="Playlist" src="/site_data/img/playlist.svg"/></div> 
    
    
    <div class="player-controls">

<div class="volume-set">
    <input class="vol-bar" type="range" max="1" min="0" value="1" step="0.01"/>
</div>
<div class="track-data">
<h5 class="track-name"></h5>
<p class="artist-release"></p>
</div>
<div class="track-time">
<input class="pos-bar" type="range" max="100" min="0" value="0" step="0.1"/>
<br>
<span class="cur-time">00:00</span>
<span class="length">00:00</span>
</div>
<div class="buttons">
    <img id="previous"  src="site_data/img/skip_previous.svg"  alt="Previous Track"/>
    <img id="play-pause" src="site_data/img/play.svg" alt="Play-Pause"/>
    <img id="next" src="site_data/img/skip_next.svg" alt="Next Track"/>
</div>  



</div>

</div>
 
</body>
</html>
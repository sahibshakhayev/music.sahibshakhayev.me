<?php
session_start();
if (!$_SESSION['login']) {
    header('Location:login.php');
}
?>
<!DOCTYPE html>
<html lang="az-AZ">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You Title</title>
    <link rel="icon" href="/site_data/music.ico"/>
    <link rel="stylesheet" href="/site_data/css/upload.css"/>
    <script src="/site_data/js/jquery.min.js" type="text/javascript"></script>
    <script src="/site_data/js/upload.js" type="text/javascript"></script>
</head>
<body>
    <ul class="navbar">
        <li id="username"><?php echo "Salam".","." ".$_SESSION['username']."!"; ?></li>
        <li id="logout"><img src="/site_data/img/logout.svg"/><b>Çıxış</b></li>
      </ul> 
<div class="upload-body">
<h1>You Title</h1>
<h2>Yükləmə Sistemi</h2>
<form action="/site_data/php/upload_form.php"   enctype="multipart/form-data"  method="POST"  id="form">
<div class="input-body  track-name-body">
<img class="icon"  src="/site_data/img/track_name.svg" alt="TrackName">
<input class="text" title="Mahnının adını daxil edin. Feat-i nəzərə alın. İfaçının adını nəzərə almayın." id="track" placeholder="* Mahnın adı" name="track" type="text" required>   
</div>
<div class="input-body artist-body">
    <img class="icon"  src="/site_data/img/artist_name.svg" alt="Artist Name">
    <input class="text" title="İfaçının adını daxil edin. Feat-i nəzərə almayın." id="artist" placeholder="* İfaçı" name="artist" type="text" required>   
    </div>
<div class="input-body release-body">
    <img class="icon"  src="/site_data/img/release_name.svg" alt="Release Name">
    <input class="text" title="Nəşrin adını daxil edin. Albom/EP/Single" id="release" placeholder="* Nəşrin adı" name="release" type="text" required>   
</div>
<h4>* Nəşrin növu:</h4>
<div class="select-rel-type-bar">
    <input  type="radio" id="Album" name="release_type" value="Album">
    <label title="Mahnı toplusu. Adətən içində 10-dan çox mahnı var." for="Album">Albom</label>
    <input type="radio" id="EP" name="release_type" value="EP">
    <label id="ep-label" title="Mini albom. Adətən içində 10-dan az mahnı var." for="EP">EP</label>
    <input type="radio" id="Single" name="release_type" value="Single" checked>
    <label title="Nəşr bir mahnıya həsr olunur." for="Single">Single</label> 
</div>
<h4 id="first"> * Yerləşmə yeri:</h4>
<div class="make-first">
<input  type="radio" id="First" name="is-first" value="First">
    <label  for="First">Birinci olsun</label>
    <input type="radio" id="Last" name="is-first" value="Last" checked>
    <label id="last-label"  for="Last">Sonuncu olsun</label>
</div>
<h4 id="song-file">* Mahnı faylı (MP3, OGG, AAC və ya FLAC):</h4>
<div title="Mahnını yükləmək üçün onun faylını seçin. Dəstəklən formatlar:MP3, OGG, AAC və FLAC" class="input-body song-file">
<input type="file" id="song-sel-btn" name="songFile" hidden/>
<label  class="file-select" for="song-sel-btn">Fayl Seçin</label>
<span class="file-chosen" id="song-chosen">Fayl Seçilməyib</span>
</div>
<h4 id="cover-file">Örtük şəkli (JPG, JPEG, PNG, BMP və ya GIF):</h4>
<div title="Fırlanan disk üçün örtük şəkli seçin." class="input-body cover-file">
    <input type="file" id="cover-sel-btn" name="coverFile" hidden/>
    <label class="file-select" for="cover-sel-btn">Fayl Seçin</label>
    <span class="file-chosen" id="cover-chosen">Fayl Seçilməyib</span>
    </div>
    <h4 id="lrc-file">Mahnı sözləri (LRC Faylı):</h4>
    <div title="Mahnının sözlərini göstərmək üçün LRC faylı yükləyin" class="input-body lrc-file">
        <input type="file" id="lrc-sel-btn" name="LRCFile" hidden/>
        <label class="file-select" for="lrc-sel-btn">Fayl Seçin</label>
        <span class="file-chosen" id="lrc-chosen">Fayl Seçilməyib</span>
        </div>
<div class="input-body buttons">
<input id="uploadbutton" value="Yüklə"  id='submit'  type="submit"/>
<input  id="resetbutton" value="Sıfırla"  type="reset"/>    
</div>
<h5>* - Vacibdir və Qeyd Olunmalıdı</h5>
</form>
</div>    
<div class="msg-box">
<img src="/site_data/img/loading.gif" alt="Error Icon">
<p class="msg"></p>
<progress value="0" max="100"></progress>
<button id="ok-btn">OK</button>
</div>     


</body>
</html>
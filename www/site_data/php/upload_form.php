<?php 
session_start();
require_once('mysql.php');
if (!$_SESSION['login'] && empty($_POST['track'])) {
    header('Location:/upload');
    exit();
}
$Track = $_POST['track'];
$Artist = $_POST['artist'];
$Release = $_POST['release'];
$Release_type = $_POST['release_type'];
$IsFirst = $_POST['is-first'];
$SongFile = $_FILES["songFile"];
$CoverFile = $_FILES["coverFile"];
$LRCFile = $_FILES["LRCFile"];
$SongsFolder = $_SERVER['DOCUMENT_ROOT']."/"."songs/";
$CoversFolder =  $_SERVER['DOCUMENT_ROOT'].'/songs/cover/';
$LRCFolder = $_SERVER['DOCUMENT_ROOT'].'/songs/lrc/';

if ($Release_type == 'Album') {
$ArtistRelease = $Artist." "."-"." ".$Release;
}else {
$ArtistRelease = $Artist." "."-"." ".$Release." "."(".$Release_type.")";

}




if(!empty($_FILES["songFile"]['name'])){
    $error;
    $song_name = $SongFile['name'];
    $song_tmp =$SongFile['tmp_name'];
    $song_type=$SongFile['type'];
    $song_ext=strtolower(end(explode('.',$SongFile['name'])));
    $song_extensions= array("mp3","ogg","aac", "flac");
    $SongFW = $Artist." "."-"." ".$Track.".".$song_ext;
    if(in_array($song_ext,$song_extensions)=== false){
       $error="Bu Mahnı Faylı növü dəstəklənmir! Xahiş edirik MP3, OGG, AAC və ya FLAC yükləyin.";
    }
    
    
    if(empty($error)==true){
       move_uploaded_file($song_tmp,$SongsFolder.$SongFW);
       $SongFileW= '/'.'songs/'.$SongFW;
    }else{
       echo json_encode($error);
       exit();
    }
 }
  else {
echo json_encode('Mahnı faylı seçilməyib! Xahiş edirik mahnı faylı seçin.');
exit();
  }

  if(!empty($_FILES["coverFile"]['name'])){
    $error;
    $cover_name = $CoverFile['name'];
    $cover_tmp =$CoverFile['tmp_name'];
    $cover_type=$CoverFile['type'];
    $cover_ext=strtolower(end(explode('.',$CoverFile['name'])));
    $cover_extensions= array("jpg","jpeg","png", "bmp","gif");
    $CoverFW = $Artist." "."-"." ".$Track.".".$cover_ext;
    if(in_array($cover_ext,$cover_extensions)=== false){
       //$errors[]="Örtük şəkli üçün bu fayl növü dəstəklənmir! Xahiş edirik JPG, JPEG, PNG, BMP və ya GIF yükləyin.";
       $error=$SongFile;
    }
    
    
    if(empty($error)==true){
       move_uploaded_file($cover_tmp,$CoversFolder.$CoverFW);
       $CoverW= '/songs/cover/'.$CoverFW;
    }else{
       echo json_encode($error);
       exit();
    }
 } else {
    $CoverW ='';
}


if(!empty($_FILES["LRCFile"]['name'])){
    $error;
    $lrc_name = $LRCFile['name'];
    $lrc_tmp =$LRCFile['tmp_name'];
    $lrc_type=$LRCFile['type'];
    $lrc_ext=strtolower(end(explode('.',$LRCFile['name'])));
    $lrc_extensions= array("lrc");
    $LRCFW = $Artist." "."-"." ".$Track.".".$lrc_ext;
    if(in_array($lrc_ext,$lrc_extensions)=== false){
       $error="Mahnı sözləri üçün yalnız LRC - Faylı Dəstəklənir!";
    }
    
    
    if(empty($error)==true){
       move_uploaded_file($lrc_tmp,$LRCFolder.$LRCFW);
       $LRCW= '/songs/lrc/'.$LRCFW;
    }else{
       echo json_encode($error);
       exit();
    }
 } else {
    $LRCW = '';

 }

 if ($music_db->connect_error) {
    echo json_encode("Daxili xəta! Məlumat bazasına qoşula bilmədi: " . $music_db->connect_error);
    exit();
  }

if ($IsFirst == 'First') {
$YesRemove = "UPDATE `songs` SET `IsBegin`='' WHERE `IsBegin` = 'Yes'";
if ($music_db->query($YesRemove) === TRUE) {
   $sqlfr = "INSERT INTO songs (TrackName, ArtistRelease, SongFile, CoverFile, LRCFile, IsBegin)
   VALUES ('$Track', '$ArtistRelease', '$SongFileW', '$CoverW', '$LRCW', 'Yes')";
   
   if ($music_db->query($sqlfr) === TRUE) {
     echo json_encode("OK!");
   } else {
     echo json_encode("Daxili xəta: " . $sqlfr . " " . $music_db->error);
   }
   


 } else {
   echo json_encode("Daxili xəta: " . $YesRemove . " " . $music_db->error);
 }


} if ($IsFirst == 'Last') {
   $sql = "INSERT INTO songs (TrackName, ArtistRelease, SongFile, CoverFile, LRCFile, IsBegin)
   VALUES ('$Track', '$ArtistRelease', '$SongFileW', '$CoverW', '$LRCW', '')";
   
   if ($music_db->query($sql) === TRUE) {
     echo json_encode("OK!");
   } else {
     echo json_encode("Daxili xəta: " . $sql . " " . $music_db->error);
   }


}

  
  
  
  $music_db->close();






?>
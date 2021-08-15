<?php
require_once('mysql.php');


if ($music_db -> connect_errno) {
    echo json_encode("DB_ERROR");
    exit();
  }
if ($tracks = $music_db->prepare("SELECT TrackName FROM songs")) {
    $tracks->bind_result($trackname);
    $OK_Track = $tracks->execute();
}
else {
    echo json_encode("Q_ERROR");
    exit();
}
$result_tracks = Array();
while($tracks->fetch()) {
    
    $result_tracks[] = $trackname;
    
    
}


if ($arrel = $music_db->prepare("SELECT ArtistRelease FROM songs")) {
    $arrel->bind_result($arrelname);
    $OK_Arrel = $arrel->execute();
}
else {
    echo json_encode("Q_ERROR");
    exit();
    }
$result_artists_releases = Array();
while($arrel->fetch()) {
    $result_artists_releases[] = $arrelname;
}

if ($song = $music_db->prepare("SELECT SongFile FROM songs")) {
    $song->bind_result($songfile);
    $OK_song = $song->execute();
}
else {
    echo json_encode("Q_ERROR");;
    exit();
    }
$result_songs = Array();
while($song->fetch()) {
    $result_songs[] = $songfile;
}


if ($cover = $music_db->prepare("SELECT CoverFile FROM songs")) {
    $cover->bind_result($coverfile);
    $OK_cover = $cover->execute();
}
else {
    echo json_encode("Q_ERROR");
    exit();
    }
$result_covers = Array();
while($cover->fetch()) {
    $result_covers[] = $coverfile;
}


if ($lrc = $music_db->prepare("SELECT LRCFile FROM songs")) {
    $lrc->bind_result($lrcfile);
    $OK_lrc = $lrc->execute();
}
else {
    echo json_encode("Q_ERROR");
    exit();
    }
$result_lrcs = Array();
while($lrc->fetch()) {
    $result_lrcs[] = $lrcfile;
}

if ($isbegin = $music_db->prepare("SELECT IsBegin FROM songs")) {
    $isbegin->bind_result($isbeginres);
    $OK_isb = $isbegin->execute();
}
else {
    echo json_encode("Q_ERROR");
    exit();
    }
$result_isbegin = Array();
while($isbegin->fetch()) {
    $result_isbegin[] = $isbeginres;
}

foreach($result_isbegin as $key => $value) {
if($result_isbegin[$key] == 'Yes') {
$movetrack = $result_tracks[$key];
$moveartistrelease = $result_artists_releases[$key];
$movesongfiles = $result_songs[$key];
$movecovers = $result_covers[$key];
$movelrcs = $result_lrcs[$key];
unset($result_tracks[$key]);
unset($result_artists_releases[$key]);
unset($result_songs[$key]);
unset($result_covers[$key]);
unset($result_lrcs[$key]);
array_unshift($result_tracks, $movetrack);
array_unshift($result_artists_releases, $moveartistrelease);
array_unshift($result_songs, $movesongfiles);
array_unshift($result_covers, $movecovers);
array_unshift($result_lrcs, $movelrcs);
}
}








$loaded_songs = array(
    'Tracks' => $result_tracks,
    'ArtistsReleases' => $result_artists_releases,
    'SongFiles' => $result_songs,
    'Covers' => $result_covers,
    'LRCS' => $result_lrcs,
 );

 echo json_encode($loaded_songs);
 $music_db -> close();


?>
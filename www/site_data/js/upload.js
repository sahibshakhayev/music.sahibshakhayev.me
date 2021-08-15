$(function() {
var Track = $('#track');
var Artist =$('#artist');
var Release = $('#release');
var SongFile = $('#song-sel-btn');
var CoverFile = $('#cover-sel-btn');
var LRCFile = $('#lrc-sel-btn');
var Form = $("#form");
var MSGBox = $('.msg-box');
var MSG = $('.msg');
var Progress = $('.msg-box progress');
SongFile.prop('accept',".mp3,.ogg,.aac,.flac");
CoverFile.prop('accept',".jpg, .jpeg, .png, .bmp, .gif");
LRCFile.prop('accept',".lrc");



 



Track.on('focus', function() {
$('.track-name-body .icon').attr('src','/site_data/img/track_name-focus.svg');
});

Track.on('focusout', function() {
    $('.track-name-body .icon').attr('src','/site_data/img/track_name.svg');
    });


    Artist.on('focus', function() {
        $('.artist-body .icon').attr('src','/site_data/img/artist_name-focus.svg');
        });
        
        Artist.on('focusout', function() {
            $('.artist-body .icon').attr('src','/site_data/img/artist_name.svg');
            });


Release.on('focus', function() {
                $('.release-body .icon').attr('src','/site_data/img/release_name-focus.svg');
                });
                
Release.on('focusout', function() {
                    $('.release-body .icon').attr('src','/site_data/img/release_name.svg');
                    });


SongFile.on('change', function(){
    var SongExtension = ['mp3', 'ogg', 'aac', 'flac'];
    if ($.inArray($(this).val().split('.').pop().toLowerCase(), SongExtension) == -1) {
        $('.msg-box img').attr('src', '/site_data/img/error-msg-icon.svg');
        MSG.text('Mahnı faylı üçün yalnız bu formatlar dəstəklənir: MP3, OGG, AAC və ya FLAC!');
        MSGBox.css('display', 'block');
        $(this).val('');
        $("#song-chosen").text('Fayl Seçilməyib');
    }
else {

$("#song-chosen").text(this.files[0].name);
}
});

CoverFile.on('change', function(){
    var CoverExtension = ['jpg','jpeg','png','bmp', 'gif'];
    if ($.inArray($(this).val().split('.').pop().toLowerCase(), CoverExtension) == -1) {
        $('.msg-box img').attr('src', '/site_data/img/error-msg-icon.svg');
        MSG.text('Örtük şəkli üçün yalnız bu formatlar dəstəklənir: JPG, JPEG, PNG, BMP və ya GIF!');
        MSGBox.css('display', 'block');
        $(this).val('');
        $("#cover-chosen").text('Fayl Seçilməyib');
    }
else {

$("#cover-chosen").text(this.files[0].name);
}
});

LRCFile.on('change', function(){
    var LRCExtension = ['lrc'];
    if ($.inArray($(this).val().split('.').pop().toLowerCase(), LRCExtension) == -1) {
        $('.msg-box img').attr('src', '/site_data/img/error-msg-icon.svg');
        MSG.text('Mahnı sözləri üçün yalnız LRC - faylı dəstəklənir!');
        MSGBox.css('display', 'block');
        $(this).val('');
        $("#cover-chosen").text('Fayl Seçilməyib');
    }

  else {
$("#lrc-chosen").text(this.files[0].name);
}
    });
    
Form.on('reset', function() {
$('.file-chosen').text('Fayl Seçilməyib');
$('#ok-btn').on('click', function() {
   MSGBox.css("display", "none");
    
    
    
    });


});

$('#ok-btn').on('click', function() {
MSGBox.css("display", "none");



});

$('#logout').on('click', function() {
    window.location = 'logout.php';
    
    
    
    });


Form.on('submit', function(event){

        
    event.preventDefault();
   if (Track.val() == ''|| Artist.val() == ''||Release.val() == ''|| SongFile.val() == '') {
    $('.msg-box img').attr('src', '/site_data/img/error-msg-icon.svg');
    MSG.text('Vacib məlumatlar verilməyib! Vacib və Qeyd Olunmalı məlumatları doldurun!');
    MSGBox.css('display', 'block');
    return false;
  }


  $.ajax({
    xhr: function() {
        var xhr = new window.XMLHttpRequest();
        xhr.upload.addEventListener("progress", function(evt) {
            if (evt.lengthComputable) {
                var percentComplete = ((evt.loaded / evt.total) * 100);
                var ProgressValue = Math.round(percentComplete);
                Progress.val(percentComplete);
                MSG.text('Gözləyin. Əməliyyat aparılır....' + " " +ProgressValue+"%"+' '+'bitti');
                
            }
        }, false);
        return xhr;
    }, 
    type: 'POST',
    url: '/site_data/php/upload_form.php',
    data: new FormData(this),
    contentType: false,
    cache: false,
    dataType: 'json',
    processData:false,
    beforeSend: function(){
       
        Progress.val('0');
        Progress.css('display', 'block');
        $('.msg-box img').attr('src', '/site_data/img/loading.gif');
        MSG.text('Gözləyin. Əməliyyat aparılır....');
        MSGBox.css('display', 'block');
    },
    success: function(response){ 
      if (response = 'OK!') {
        Progress.css('display', 'none');
        $('.msg-box img').attr('src', '/site_data/img/success.png');
        MSG.text('Uğurla Yükləndi!');
        $('#ok-btn').on('click', function() {
            MSGBox.css("display", "none");
            $('#form')[0].reset();
            
            
            });
       
        }

         else {
            Progress.css('display', 'none');
            $('.msg-box img').attr('src', '/site_data/img/error-msg-icon.svg');
            MSG.text('Xəta:' + " " + response);

         }


    },
    error: function(jqXHR, textStatus, errorThrown){
        
        $('.msg-box img').attr('src', '/site_data/img/error-msg-icon.svg');
        MSG.text('Sistemdə xəta:'+ " " + '"'+textStatus+":"+ " " + errorThrown+ '"');
        MSGBox.css('display', 'block');



    }
    




});

    
    
    

    
    

    
   

   
    

    
   






});

});
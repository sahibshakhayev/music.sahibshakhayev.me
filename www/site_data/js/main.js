$(function() {
 var Cover = $('.cover');
 var TrackName = $('.track-name');
 var ArtistRelease = $('.artist-release');
 var PosBar = $('.pos-bar');
 var CurTime = $('.cur-time');
 var Length = $('.length');
 var Previous = $('#previous');
 var Volume = $('.volume-set');
 var VolumeBar = $('.vol-bar');
 var PlayPauseButton = $('#play-pause');
 var Playlist = $('.playlist');
 var LRCList = $('#lrc');
 var Next = $('#next');
 var curIndex = -1;
 var curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0, buffInterval = null,tFlag = false;
 var TrackNames;
 var ArtistsReleases;
 var SongFiles;
 var Covers;
 var LRC;
 
 $.ajax({
    url : '/site_data/php/load_songs.php',
    type : 'POST',
    dataType : 'json',
    success : function (result) {
        if (result == 'DB_ERROR') {
        alert ('Daxili xəta! Məlumat Bazasına qoşula bilmədi!')
        }
        
           if (result == 'Q_ERROR') {
            alert ('Daxili xəta! Sorğu göndərilə bilmədi!')
            }
        else {
        TrackNames = result['Tracks'];
        ArtistsReleases = result['ArtistsReleases'];
        SongFiles = result['SongFiles'];
        Covers = result['Covers'];
        LRC = result['LRCS'];


       initPlayer();
       
        }
    },
    error : function (request, error) {
       alert('Daxili xəta:'+" "+error);
    }
});
 

 function LRCShow(LRCFile) {
    var LRCData; 
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", LRCFile, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        LRCData = rawFile.responseText;
        
     
  
var lrc = LRCData;

 function getLrcArray() {
     var parts = lrc.split("\n");
     for (let index = 0; index < parts.length; index++) {
         parts[index] = getLrcObj(parts[index]);
     }
     return parts;
 
     function getLrcObj(content) {
         var twoParts = content.split("]");
         var time = twoParts[0].substr(1);
         var timeParts = time.split(":");
         var seconds = +timeParts[1];
         var min = +timeParts[0];
         seconds = min * 60 + seconds;
         var words = twoParts[1];
         return{
             seconds: seconds,
             words: words,
         };
     } 
 }
 
 var lrcArray = getLrcArray();
 function inputLrc() {
    for (let index = 0; index < lrcArray.length; index++) {
        var li = document.createElement("li");
        li.innerText = lrcArray[index].words;
        LRCList.append(li);
    }
}

inputLrc();

function setPosition() {
    var index = getLrcIndex();
    if (index == -1) {
        return;
    }
    var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
    var lrc_li_height = 35, lrc_ul_height = 400;
    if (window.innerWidth <= 1024 && orientation === 'portrait-primary') {
        lrc_ul_height = 640;
        lrc_li_height = 70;
    }

    if (window.innerWidth <= 800 && orientation === 'portrait-primary') {
        lrc_ul_height = 440;
        lrc_li_height = 70;
    }
    if (window.innerWidth <= 600 && orientation === 'portrait-primary') {
        lrc_ul_height = 340;
        lrc_li_height = 70;
    }
    if (window.innerWidth <= 420 && orientation === 'portrait-primary') {
        lrc_ul_height = 340;
        lrc_li_height = 35;
    }
    if (window.innerWidth <= 360 && orientation === 'portrait-primary') {
        lrc_ul_height = 240;
        lrc_li_height = 35;
    }
    var top = index * lrc_li_height + lrc_li_height / 2 - lrc_ul_height / 2;
    if (top < 0) {
        top = 0;
    }
    LRCList.css('margin-top', -top + "px" );
    var activeLi = LRCList.find(".active");
    if(activeLi){
        activeLi.removeClass("active");
    }
    LRCList.children().eq(index).addClass("active");
}

var turn = 0.5;

function getLrcIndex(){
    var time = audio.currentTime + turn;
    for (var index = 0; index < lrcArray.length; index++) {
        if (lrcArray[index].seconds > time) {
            return index - 1;
        }
    }
}

$(audio).on('timeupdate',setPosition);
}
}

rawFile.send();
 }


function VolumeSet () {
Volume.toggle();
var VolTout = setTimeout(() => {
    Volume.hide();  
}, 3000);

VolumeBar.on('input' , function() {
clearTimeout(VolTout);
$(audio).prop('volume', $(this).val());
$(this).css('background', 'linear-gradient(90deg, black'+ " " + ($(this).val()*100)+"%, rgba(255, 255, 255, 0.7)" + ($(this).val()*100) + "%)");

if (audio.volume == 0) {
  $('#volume').attr('src', '/site_data/img/mute.svg');  
}
else {
    $('#volume').attr('src', '/site_data/img/volume.svg');

}

VolTout = setTimeout(() => {
    Volume.hide();  
}, 3000);

});
}
 


 function playPause() {
        
    setTimeout(function()
        {
            if(audio.paused)
            {
                
                audio.play();
                
            }
            else
            {
                
                audio.pause();
                
            }
        },300);
    }
    
    

             
    function isplaying() {
        
    
            IfBuffering();
            Cover.addClass('rotate');
            PlayPauseButton.attr('src', '../site_data/img/pause.svg');
            Playlist.children().eq(curIndex).addClass('active-playing');
            Playlist.children().eq(curIndex).children('.status').attr('src', '/site_data/img/is-playing.svg');
    }
       function ispaused () {
        clearInterval(buffInterval);
        $(".chkb").hide();
       
            Cover.removeClass('rotate');
                PlayPauseButton.attr('src', '../site_data/img/play.svg');
                Playlist.find('.active-playing').removeClass('active-playing');
                Playlist.children().eq(curIndex).children('.status').attr('src', '/site_data/img/is-paused.svg');
       }
       function IfBuffering()
       {
           clearInterval(buffInterval);
           buffInterval = setInterval(function()
           { 
               if( (nTime == 0) || (bTime - nTime) > 1000  ) {
               
               LRCList.hide();
            $(".chkb").show();
               
               }
               else
               $(".chkb").hide();
               LRCList.show();
              
       
               bTime = new Date();
               bTime = bTime.getTime();
       
           },100);
       }
       
        
        
function updateCurrTime()
	{
        nTime = new Date();
        nTime = nTime.getTime();

        if( !tFlag )
        {
            tFlag = true;
            
        }

		curMinutes = Math.floor(audio.currentTime / 60);
		curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
		
		durMinutes = Math.floor(audio.duration / 60);
		durSeconds = Math.floor(audio.duration - durMinutes * 60);
		
		playProgress = (audio.currentTime / audio.duration) * 100;
		
		if(curMinutes < 10)
			curMinutes = '0'+curMinutes;
		if(curSeconds < 10)
			curSeconds = '0'+curSeconds;
		
		if(durMinutes < 10)
			durMinutes = '0'+durMinutes;
		if(durSeconds < 10)
			durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            CurTime.text('00:00');
        else
             CurTime.text(curMinutes+':'+curSeconds);
        
        if( isNaN(durMinutes) || isNaN(durSeconds) )
        Length.text('00:00');
        else
        Length.text(durMinutes+':'+durSeconds);
        
        
            
        PosBar.val(playProgress);
        PosBar.css('background', 'linear-gradient(90deg, black' +" "+ (playProgress) +'%, rgba(255, 255, 255, 0.7)'+ ' '+ (playProgress) +'%');
		
        
		
		if( playProgress == 100 )
		{
			PlayPauseButton.attr('src', '../site_data/img/play.svg');
		    PosBar.val(0);
            Playlist.find('.active-playing').removeClass('active-playing');
            Playlist.children().eq(curIndex).children('.status').attr('src', '/site_data/img/is-paused.svg');
            PosBar.css('background', 'linear-gradient(90deg, black 0%, rgba(255, 255, 255, 0.7) 0%');
            CurTime.text('00:00');
            Cover.removeClass('rotate');
            $(".chkb").hide();
            clearInterval(buffInterval);
            setTimeout(() => {
                selectTrack(1);  
            }, 1000);
		}
    }
    
    


    function selectTrack(flag)
    {
        if( flag == 0 || flag == 1 )
            ++curIndex;
        else
            --curIndex;

        if( (curIndex > -1) && (curIndex < TrackNames.length) )
        {
            if( flag == 0 )
            PlayPauseButton.attr('src', '../site_data/img/play.svg');
            else
            {
                $(".chkb").hide();
                PlayPauseButton.attr('src', '../site_data/img/pause.svg');
            }

            PosBar.val(0);
            PosBar.css('background', 'linear-gradient(90deg, black 0%, rgba(255, 255, 255, 0.7) 0%');
            Playlist.find('.active').children('.status').css('display', 'none');
            Playlist.find('.active-playing').removeClass('active-playing');
            Playlist.find('.active').removeClass('active');
            
            CurTime.text('00:00');
            Length.text('00:00');
            LRCList.empty();
            currArRel = ArtistsReleases[curIndex];
            currTrackName = TrackNames[curIndex];
            currCover = Covers[curIndex];
            if (currCover == ''||currCover == ' '){
                currCover = '/songs/cover/no-cover.jpg';
              }

            currLRC= LRC[curIndex];
            if (currLRC == ''||currLRC == ' '){
                currLRC = '/songs/lrc/no-lrc.lrc';
              }

             if(curIndex >= 4) {
                var scroll = curIndex * 70 + 70 / 2 - $('.playlist-body').height() / 2;
                $("#playlist").on('click', function () {
                    $('.playlist-body').show();
                    $('.playlist-body').scrollTop(scroll); 
                   
                });
                
                


             }


            audio.src = SongFiles[curIndex];
            
            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if(flag != 0)
            {
                audio.play();
                
                Cover.addClass('rotate');
                clearInterval(buffInterval);
                IfBuffering();
                
            }

            ArtistRelease.text(currArRel);
            TrackName.text(currTrackName);
            Cover.attr('src', currCover);
            Playlist.children().eq(curIndex).addClass('active');
            Playlist.children().eq(curIndex).addClass('active-playing');
            Playlist.children().eq(curIndex).children('.status').attr('src', '/site_data/img/is-playing.svg');
            Playlist.children().eq(curIndex).children('.status').css('display', 'block');
           LRCShow(currLRC);
           if (currLRC == '/songs/lrc/no-lrc.lrc') {
            $('.lrc-show').hide();
            } else {
                $('.lrc-show').show();


            }
          
            
        }
        else
        {
            if( flag == 0 || flag == 1 )
                --curIndex;
            else
                ++curIndex;
        }
    }

function CreatePlaylist () {
    $.each(TrackNames, function(i)
    {
        var li = $('<li/>')
            .appendTo(Playlist);
        var trname = $('<h6/>')
            .text(TrackNames[i])
            .appendTo(li);
        var aralname = $('<p/>')
        .text(ArtistsReleases[i])
        .appendTo(li); 
        var plimg = $('<img/>')
        .attr('src', '/site_data/img/is-playing.svg')
        .appendTo(li)
        .addClass('status');
        var Coverplimg;
        if (Covers[i] == ''||Covers[i] == ' '){
            Coverplimg = '/songs/cover/no-cover.jpg'; 
          } else {
            Coverplimg = Covers[i];

          }
        
        var coverimg = $('<img/>')
        .attr('src', Coverplimg)
        .appendTo(li)
        .addClass('cover-pl');


        });



}
    

    function initPlayer()
	{	
        CreatePlaylist ();
        audio = new Audio();
        
		selectTrack(0);
		$(audio).prop('volume', 1);
		audio.loop = false;
		Playlist.children().on('click', function () {
        curIndex = ($(this).index() - 1)
        selectTrack(1);

        });
		PlayPauseButton.on('click',playPause);
		$('.lrc-show').on('click' , function() {$(this).hide();});
		Cover.on('click', function() { $('.lrc-show').show(); });
        $('#upload').on('click', function() {window.location='/upload'});
        $('.disk-center').on('click', function() { $('.lrc-show').show(); });
        $('#volume').on('click', VolumeSet);
        Playlist.find('.active-playing').removeClass('active-playing');
        Playlist.children().eq(curIndex).children('.status').attr('src', '/site_data/img/is-paused.svg');
		$('#playlist').on('click', function () {$('.playlist-body').removeClass('hide');
        $('.playlist-body').addClass('show') });
        $('#close').on('click', function () {$('.playlist-body').removeClass('show');
        $('.playlist-body').addClass('hide')});
        $('#left').on('click', function () {$('.playlist-body').removeClass('show');
        $('.playlist-body').addClass('hide')});
        $(audio).on('playing', isplaying);
        $(audio).on('pause', ispaused);
        $(audio).on('timeupdate',updateCurrTime);
        PosBar.on('input', function() {
        audio.currentTime=($(this).val()*audio.duration)/100;
       });
        Previous.on('click',function(){ selectTrack(-1);} );
        Next.on('click',function(){ selectTrack(1);});
	}
    
	
    












});
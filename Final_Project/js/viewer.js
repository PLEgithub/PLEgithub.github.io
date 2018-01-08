// Below copied from <script> tag from YouTube API:
// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads; different events for each video/button/li combo


var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
	  height: '390',
	  width: '640',
	  videoId: 'p2qh0iu2q0U',
	  playerVars: { 'autoplay': 0, 'controls': 0, 'enablejsapi': 1, 'showinfo':0, 'modestbranding': 1, 'rel': 0 , 'loop':1},
	  events: {
	    'onReady': onPlayerReady,
	    'onStateChange': onPlayerStateChange
	  }
	});
}

// onYouTubeIframeAPIReady()

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for 11 seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.ENDED) {
  player.playVideo();
  done = true;
}
}
function stopVideo() {
player.stopVideo();
}

// ADDING PLAY/PAUSE FUNCTIONALITY TO BUTTONS IN OVERLAY MENU
function onPlayerReady(event) {
  
  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });
  
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });
  
}

// VIDEO PLAYBACK STOPPING ON OVERLAY FADEOUT
$('#closeout').click(function() {
  player.stopVideo();
});

$(document).keyup(function(e){
    if(e.keyCode === 27)
        $("#overlay").fadeOut();
        player.stopVideo();
});

// CLICK EVENT TO TRIGGER OVERLAY W/ PLAYER
$('button').click(function() {
  $("#overlay").fadeIn();
});

$('.videoth').click(function() {
  $("#overlay").fadeIn();
});

// CLOSEOUT functions for X click & Esc keystroke
$(document).on("click", "#closeout", function() {
  $("#overlay").fadeOut();
});

// $('#closeout').click(function() {
//   $("#overlay").fadeOut();
// });


// VIDEO PLAYBACK TO MENU SELECTIONS
  $('#videoselect').change(function(){ 
    if($(this).val() == "selvideo1"){
      player.loadVideoById({videoId:'p2qh0iu2q0U',
          })  }
    if($(this).val() == "selvideo2"){
      player.loadVideoById({videoId:'xgR1ydVwCts',
          })  }
    if($(this).val() == "selvideo3"){
      player.loadVideoById({videoId:'2_zQ8OXSi8w',
          })  }
    if($(this).val() == "selvideo4"){
      player.loadVideoById({videoId:'nTB1HqcrIX0',
          })  }
// had to remove :VOID from the end of the above function    

// below is part of original code copied from SO; but when commented out it returns a syntax error(?)    
    if($(this).val() == 2){
      function2();
    }

});

// SPECIFYING VIDEO ID SELECTION
 $('.videoli').click(function(){ 
    if($(this).attr("id") == "videoli1"){
      player.loadVideoById({videoId:'p2qh0iu2q0U',
          })  }
    if($(this).attr("id") == "videoli2"){
      player.loadVideoById({videoId:'xgR1ydVwCts',
          })  }
    if($(this).attr("id") == "videoli3"){
      player.loadVideoById({videoId:'2_zQ8OXSi8w',
          })  }
    if($(this).attr("id") == "videoli4"){
      player.loadVideoById({videoId:'nTB1HqcrIX0',
          })  }
// had to remove :VOID from the end of the above function    

// below is part of original code copied from SO; but when commented out it returns a syntax error(?)    
    if($(this).val() == 2){
      function2();
    }
});

 $('button').click(function(){ 
    if($(this).attr("id") == "button1"){
      player.loadVideoById({videoId:'p2qh0iu2q0U',
          })  }
    if($(this).attr("id") == "button2"){
      player.loadVideoById({videoId:'xgR1ydVwCts',
          })  }
    if($(this).attr("id") == "button3"){
      player.loadVideoById({videoId:'2_zQ8OXSi8w',
          })  }
    if($(this).attr("id") == "button4"){
      player.loadVideoById({videoId:'nTB1HqcrIX0',
          })  }
// had to remove :VOID from the end of the above function    

// below is part of original code copied from SO; but when commented out it returns a syntax error(?)    
    if($(this).val() == 2){
      function2();
    }

});

// OVERLAY 4: RAINFALL EFFECT
var nbDrop = 858;

function randRange(minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function createRain() {
  for (i = 1; i < nbDrop; i++) {
    var dropLeft = randRange(0, 1600);
    var dropTop = randRange(-1000, 1400);
    
    $('.rain').append('<div class="drop" id="drop' + i + '"></div>');
    $('#drop' + i).css('left', dropLeft);
    $('#drop' + i).css('top', dropTop);
  }
}

// CHANGING THE VIDEO OVERLAYS VIA DROPDOWN MENU 
  $('#overlayselect').change(function(){ 
// OVERLAY 1: BLACK
    if($(this).val() == "selover1"){
      $("#overlayInit").removeClass("rain");
      // $(".drop").css("opacity","0");
      $("#overlayInit").css("background","").css("background-image","").css("background-size","").css("background-position","").css("background-color","rgba(0,0,0,1)");
          }
// OVERLAY 2: LINED PAPER 
    if($(this).val() == "selover2"){
      $("#overlayInit").removeClass("rain");
      // $(".drop").css("opacity","0");
      $("#overlayInit").css("background","").css("background-position","").css("background-color","#fff").css("background-image","linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),linear-gradient(#eee .1em, transparent .1em)").css("background-size","100% 1.2em");
          }
// OVERLAY 3: BLUEPRINT GRID
    if($(this).val() == "selover3"){
      $("#overlayInit").removeClass("rain");
      // $(".drop").css("opacity","0");
      $("#overlayInit").css("background","").css("background-image","linear-gradient(white 2px, transparent 2px),linear-gradient(90deg, white 2px, transparent 2px),linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)").css("background-size","100px 100px, 100px 100px, 20px 20px, 20px 20px").css("background-color","#002b80").css("background-position","-2px -2px, -2px -2px, -1px -1px, -1px -1px");
          }
// OVERLAY 4: ARGYLE
    if($(this).val() == "selover4"){
      $("#overlayInit").removeClass("rain");
      // $(".drop").css("opacity","0");
      $("#overlayInit").css("background","").css("background-image","repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px,transparent 1px, transparent 60px),repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1))").css("background-size","70px 120px").css("background-color","#6d695c").css("background-position","");
          }
// OVERLAY 5: RAINFALL   
   if($(this).val() == "selover5"){
      $("#overlayInit").css("background-position","").css("background-image","").css("background-size","").css("background","-webkit-gradient(linear,left top,left bottom,from(#05124d),to(#000101))");
      $("#overlayInit").addClass("rain");
      // $(".drop").css("opacity","1");
      createRain();
          }
// OVERLAY 6: Q-BERT
  if($(this).val() == "selover6"){
      $("#overlayInit").removeClass("rain");
      // $(".drop").css("opacity","0");
      $("#overlayInit").css("background","").css("background-image","linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a),linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a)").css("background-size","80px 140px").css("background-color","").css("background-position","0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px");
          }
// had to remove :VOID from the end of the above function    

// below is part of original code copied from SO; but when commented out it returns a syntax error(?)    
    if($(this).val() == 2){
      function2();
    }

});

// JS for Responsive Nav bar
$( '#nav li:has(ul)' ).doubleTapToGo();


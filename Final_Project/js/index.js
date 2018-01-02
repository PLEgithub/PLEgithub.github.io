// Intro fade in:
    $('body').ready(function() { 

        $('img').hide();
        $('img').each(function(i) {
            if (this.complete) {
                $(this).fadeIn();
            } else {
                $(this).load(function() {
                    $(this).fadeIn(1000);
                });
            }
        });
    });

// splash fade out into main container
$(function(){
   setTimeout(function() {
     $("#splash").fadeOut("slow", function() {
     $("#container").fadeIn( function () {
       $(this).show(1000)
     });
      });
   }, 4000);
});

// JS for Responsive Nav bar
$( '#nav li:has(ul)' ).doubleTapToGo();


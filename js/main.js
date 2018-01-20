"use strict";

$(function() {

  // parse emoji list and get emoji of the day
  $.get("/res/emojis.txt", function(data) {
    var emojis = JSON.parse(data);
    if (emojis.length == 0) { // today is a bad day
      $("div.emojioftheday").css("display", "none");
    };
    var date = new Date().toISOString().substring(0, 10);
    var index = Math.abs(sha512(date).hashCode()) % emojis.length;
    var luckyOne = emojis[index];
    $("div.emojioftheday span").html(luckyOne);
  });

  // no more yearly updates ;)
  $("footer .year").text(new Date().getFullYear());

  // sneakbar click -> scroll to about me
  $("div.sneakbar").click(function() {
    $("#about").velocity("stop").velocity("scroll", {duration: 500, easing: "easeOutCubic", offset: -15});
  });

  // backtotop click -> scroll to about me
  $("div.backtotop").click(function() {
    $("html, body").velocity("stop").velocity("scroll", {duration: 500, easing: "easeOutCubic", mobileHA: false});
  });

  // scroll back to top
  $("a[href='#']").click(function() {
    $("html, body").velocity("stop").velocity("scroll", {duration: 500, easing: "easeOutCubic", mobileHA: false});
  });

  // scroll listener
  $(window).scroll(function() {
    window.requestAnimationFrame(scrollHandler);
  });

  // setup party plugin (at end to prevent compatibility problems affecting the whole page experience)
  var rythm = new Rythm();
  rythm.setMusic("/res/bounce.mp3");
  rythm.addRythm("rythm-title", "pulse", 0, 5, { min: 0.85, max: 1.15 });
  rythm.addRythm("rythm-social", "twist", 100, 50, { min: -25, max: 25 });
  rythm.addRythm("rythm-jump", "jump", 0, 5, { min: 0, max: 10 });

  // party button click
  $("h1 i.ion-play").click(function() {
    $("h1 i.ion-play").removeClass("show");
    $("i.ion-stop").addClass("show");
    rythm.start();
  });

  // stop button click
  $("i.ion-stop").click(function() {
    $("i.ion-stop").removeClass("show");
    rythm.stop();
  });

  // a magic formula to reveal THE button
  var patience;
  $("h1").mouseenter(function() {
    if (!$("i.ion-stop").hasClass("show"))
      patience = setTimeout(function() {
        $("h1 i.ion-play").addClass("show");
      }, 1000);
  }).mouseleave(function() {
    clearTimeout(patience);
  });

});

// scroll handler
function scrollHandler() {

  var windowPos = $(window).scrollTop();
  var windowHeight = $(window).height();
  var docHeight = $(document).height();

  // hide footer
  if (windowPos > $("#about").scrollTop() + 60) {
    $("footer").addClass("hide");
  } else {
    $("footer").removeClass("hide");
  }

}


// string hashing extension
String.prototype.hashCode = function() {
  var hash = 0;
  for (var i = 0; i < this.length; i++) {
      var char = this.charCodeAt(i);
      var hash = char + (hash << 6) + (hash << 16) - hash;
  }
  return hash;
}

/*
 * main.js: übergreifende Initialisierung der Anwendung
 */

 /* #headermenuToggle */
 /*
 var $mobilemenuToggle = $("#mobilemenuToggle");
 $mobilemenuToggle.on("click", function(ev) {
   $pageheader.toggleClass("menuActive");
 });
*/

// Funktion zum Öffnen/Schließen des Hilfsmenüs
function navToggle(close) {
    var $nav = $("nav"),
        $header = $("header");

    if ($header.hasClass("aktiv") || close) {
        $header.removeClass("aktiv");
        $header.css("height", "");
    } else {
        $header.addClass("aktiv");
        var headerHeight = $nav.outerHeight() + $("#navToggle").outerHeight();
        $header.css("height", headerHeight + "px");
    }
}
// initialisiere Funktion des Burger-Buttons (Hauptmenü open/close)
$("#navToggle").on("click", function() {
    navToggle();
});
// schließen bei Größenänderungen des Viewports ...
window.onresize = function() {
  navToggle(true);
}



// ScrollTop-Button ...
var scrollTop = document.getElementById("scrollTop");  // Element-Selektor, JSonly-Variante ...
var $scrollTop = $("#scrollTop");                      // Element-Selektor, jQuery-Variante ...
var mainContent = document.getElementById("main");

console.log(mainContent.offsetHeight); // Höhe der Gesamtseite, von <main> abgeleitet ...
console.log(window.pageYOffset);       // Scrollposition der Seite ...
console.log(window.innerHeight);       // Höhe des Viewports ...
var screenHeightRatio = .667;



/* ... Ein- und Ausblenden des scrollTop-Buttons ... */
// JSonly-Variante
window.onscroll = function() {
  var scrollTopTogglePoint = mainContent.offsetHeight - window.innerHeight - (window.innerHeight * screenHeightRatio);
  if (window.pageYOffset > scrollTopTogglePoint) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
}

/*
// jQuery-Variante ...
$(window).on("scroll", function(ev) {
  var scrollTopTogglePoint = mainContent.offsetHeight - window.innerHeight - (window.innerHeight * screenHeightRatio);
  $scrollTop.toggleClass("active", window.pageYOffset > scrollTopTogglePoint );
});
*/





/* ... Funktion bei Klick/Tap auf #scrollTop ... */

// JSonly-Variante ...
var pixPerStep = 100,
    stepTime = 40;
scrollTop.onclick = function() {
  console.log("click");
  var scroller = setInterval(function() {
    var curTop = window.pageYOffset;
    var maxTop = mainContent.offsetHeight - window.innerHeight;
    //var curPixPerStep = pixPerStep;
    var curPixPerStep = pixPerStep * curTop / maxTop;
    console.log(curPixPerStep);
    if (curTop > 0) {
      window.scrollTo(0, curTop - curPixPerStep );
    } else {
      clearInterval(scroller);
    }
  }, stepTime);
}


// jQuery-Variante ...
/*
$scrollTop.on("click", function(ev) {
  ev.preventDefault(); // unterbinde das Standardverhalten ...
  // http://api.jquery.com/animate/
  $("html, body").animate({
    scrollTop: 0
  }, 1000, "swing");
});
*/




/* smoothes und korrektes Scrollen bei AnkerLinks ... */
var $ankerLinks = $("header nav a.anker");
var offsetTop = 50;
console.log($ankerLinks);

$ankerLinks.on("click", function(ev) {
  ev.preventDefault(); // unterbinde das Standardverhalten ...

  $("html, body").animate({
    scrollTop: $(this.attributes.href.value).offset().top - offsetTop
  }, 300, "swing");
  //window.location.hash = this.attributes.href.value;
});
/* Test: Event Listener über */
/*
window.onhashchange = function(ev) {
  ev.preventDefault();
  $("html, body").animate({
    scrollTop: $(window.location.hash).offset().top - offsetTop
  }, 300, "swing");
}
*/
// mit JSonly ginge es mit sowas wie: https://codepen.io/AnotherLinuxUser/pen/eZxoQp
// oder http://iscrolljs.com/

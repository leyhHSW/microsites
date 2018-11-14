/*
 * main.js: übergreifende Initialisierung der Anwendung
 */


/*
function callNavElem(id, init) {
    $("nav a.aktiv").removeClass("aktiv");  // schalte alle nav-Links auf nicht aktiv
    $("nav #"+id).addClass("aktiv");        // schalte aktuellen nav-Link auf aktiv
    init();                                 // löse übergebene init-Funktion aus
    navToggle(true);                        // schließe ggf. das Hauptmenü
}
*/

// Funktion zum Öffnen/Schließen des Hilfsmenüs
function navToggle(close) {
    var nav = $("nav"),
        header = $("header");

    if (header.hasClass("aktiv") || close) {
        header.removeClass("aktiv");
        header.css("height", "");
    } else {
        header.addClass("aktiv");
        var headerHeight = nav.outerHeight() + $("#navToggle").outerHeight();
        header.css("height", headerHeight + "px");
    }
}


// initialisiere Funktion des Burger-Buttons (Hauptmenü open/close)
$("#navToggle").on("click", function() {
    navToggle();
});

/*
 * akkordeon.js
 * Lädt die Daten eines JSON-Objektes via jQuery
 * und fügt diese dann als Akkordeon in den <main> -Bereich der Webanwendung
 *
 */


function addHomeAkkordeonFunctionality() {
    // setze <main> auf Lade-Anzeige ...
    $("main").addClass("loading");

    // Element wird als jQuery-Objekt angelegt ...
    var $akkordeon = $(".akkordeon");

    // lege jQuery-Objekt für die ganze Akkordeon-Zeile an ...
    var $items = $akkordeon.find("div.item");

    $items.each(function(i,item) {
      var $item = $(item);
      // Event-Handler zum Öffnen/Schließen der Reiter wird hinzugefügt ...
      $item.find("h3.itemTitle").on("click", function() {
        // betreffendes Element hilfsweise als $-Objekt lokal angelegt ...
        //var thisItem = $(this).parent("div.item");

        if ($item.hasClass("open")) {    // wenn Reiter geöffnet ist (die Klasse .open hat) ...
          $item.removeClass("open")    // lösche Klasse .open
                  .css("height", "");     // lösche Inline-Stil zur Höhe
        } else {                            // wenn geschlossen ...
          // ermittle Höhe aus Titel + Content des Reiter-Inhalts
          var hoehe =   $item.children(".itemTitle").outerHeight(true)
                      + $item.children(".itemContent").outerHeight(true) + "px";
          // schließe alle ggf. noch offenen Reiter (wie oben)
          $("div.item.open").removeClass("open")
                  .css("height", "");
          // öffne den aktuellen Reiter (+ vorbereitetem Höhen-Wert als Inline-Stil
          $item.addClass("open")
                  .css("height", hoehe );
        }

        // um 150ms verzögerte Funktion:
        // scrolle "smooth" (mithilfe jQuery.animate) bis zum Titel des geöffneten Reiters,
        // damit der Inhalt möglichst optimal auf dem Bildschirm sichtbar ist ...
        /*
        window.setTimeout(function() {
          $('html, body').animate({
            scrollTop: $item.position().top - parseInt($("main").css("marginTop"))
          }, 'fast');
          window.clearTimeout;
        }, 150);
        */
      });
    });

    // letztlich: Akkordeon-Container wird ins "richtige" Dokument eingefügt,
    // dort "laden"-Klasse entfernt ...
    $("main").removeClass("loading");

}

addHomeAkkordeonFunctionality();

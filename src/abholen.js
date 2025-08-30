document.addEventListener("DOMContentLoaded", function () {
  var navbarCollapse = document.getElementById("navbarNav");
  var navLinks = navbarCollapse.querySelectorAll(".nav-link");
  var bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (
        window.getComputedStyle(document.querySelector(".navbar-toggler"))
          .display !== "none"
      ) {
        bsCollapse.hide();
      }
    });
  });
});

//PLZ Prüfung
document.getElementById("pruefen").onclick = function () {
  const kundePlz = document.getElementById("plz").value;
  if (kundePlz == 20) {
    //zeigt das zweite Formular an Quelle: Github Copilot
    document.getElementById("detailsForm").style.display = "block";
    //Verschönerung: buton und PLZ-Feld deaktivieren
    document.getElementById("pruefen").disabled = true;
    document.getElementById("plz").disabled = true;
  } else if (kundePlz == 25) {
    document.getElementById("detailsForm").style.display = "block";
    document.getElementById("pruefen").disabled = true;
    document.getElementById("plz").disabled = true;
  } else if (kundePlz == 13) {
    document.getElementById("detailsForm").style.display = "block";
    document.getElementById("pruefen").disabled = true;
    document.getElementById("plz").disabled = true;
  } else if (kundePlz == 55) {
    document.getElementById("detailsForm").style.display = "block";
    document.getElementById("pruefen").disabled = true;
    document.getElementById("plz").disabled = true;
  } else if (kundePlz == 84) {
    document.getElementById("detailsForm").style.display = "block";
    document.getElementById("pruefen").disabled = true;
    document.getElementById("plz").disabled = true;
  } else {
    alert(
      "Leider ist keine Geschäftsstelle in der Nähe Ihrer eingegebenen Adresse :("
    );
    window.location.href = "index.html";
  }
};

//bestätigungsnachricht
document.getElementById("bestaetigen").onclick = function () {
  event.preventDefault();
  // adresse
  const adresse = document.querySelector('#detailsForm input[type="text"]').value;
  //Kleidungsauswahl
  const kleidung = Array.from(
    document.querySelectorAll('#detailsForm input[type="checkbox"]:checked')).map((cb) => cb.value).join(", "); //Zeile aus Github Copilot übernommen
  //Kriesengebiet
  const kriesengebiet = document.querySelector("#detailsForm select").value;
  //bemerkung
  const bemerkung = document.getElementById("comment").value;
  // Heutiges Datum und Uhrzeit
  const jetzt = new Date();
  const datum = jetzt.toLocaleDateString();
  const uhrzeit = jetzt.toLocaleTimeString();
  // ausgabe als Alert
  alert(
    "Vielen Dank für Ihre Spende. Hier ist die Eingabebestätigung:" +
      "Kleidung: " +
      kleidung +
      "\n" +
      "Kriesengebiet: " +
      kriesengebiet +
      "\n" +
      "Bemerkung: " +
      bemerkung +
      "\n" +
      "Datum: " +
      datum +
      "\n" +
      "Uhrzeit: " +
      uhrzeit +
      "\n" +
      "Adresse: " +
      adresse
  );
  window.location.href = "index.html";
};

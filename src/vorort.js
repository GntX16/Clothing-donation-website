// SweetAlert wird über das Script-Tag in der HTML-Datei eingebunden

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

//bestätigungsnachricht
document.getElementById("bestaetigen").onclick = function () {
  event.preventDefault();
  const kleidung = Array.from(
    document.querySelectorAll('.form-vorort input[type="checkbox"]:checked')
  )
    .map((cb) => cb.value)
    .join(", ");
  const kriesengebiet = document.querySelector(".form-vorort select").value;
  const bemerkung = document.getElementById("comment").value;
  const jetzt = new Date();
  const datum = jetzt.toLocaleDateString();
  const uhrzeit = jetzt.toLocaleTimeString();

  if (kleidung.length === 0 || !kriesengebiet) {
    alert("Bitte füllen Sie alle Felder aus und wählen Sie mindestens eine Kleiderart.");
    return;
  } else {
    swal(
      "Vielen Dank für Ihre Spende. Hier ist die Eingabebestätigung:\n" +
        "Kleidung: " + kleidung + "\n" +
        "Kriesengebiet: " + kriesengebiet + "\n" +
        "Bemerkung: " + bemerkung + "\n" +
        "Datum: " + datum + "\n" +
        "Uhrzeit: " + uhrzeit,
      {
        icon: "success",
      }
    ).then(function () {
      window.location.href = "index.html";
    });
  }
};

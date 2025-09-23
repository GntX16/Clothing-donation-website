
document.addEventListener('DOMContentLoaded', function() {
  var navbarCollapse = document.getElementById('navbarNav');
  var navLinks = navbarCollapse.querySelectorAll('.nav-link');
  var bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none') {
        bsCollapse.hide();
      }
    });
  });
});
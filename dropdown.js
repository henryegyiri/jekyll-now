document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.dropdown-btn');
  var menu = document.getElementById('dropdown-menu');
  btn.addEventListener('click', function () {
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    menu.style.display = expanded ? 'none' : 'block';
  });
  // Optional: close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      btn.setAttribute('aria-expanded', 'false');
      menu.style.display = 'none';
    }
  });
});
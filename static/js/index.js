document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('copy-bibtex');
  var src = document.getElementById('bibtex-text');
  if (!btn || !src) return;
  btn.addEventListener('click', function () {
    navigator.clipboard.writeText(src.textContent).then(function () {
      var was = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(function () { btn.textContent = was; }, 1400);
    });
  });
});

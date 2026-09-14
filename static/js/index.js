// GRABS project page: minimal vanilla JS (no external dependencies).
(function () {
  // ---- Lightbox for any image marked .zoomable ----
  var lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-label', 'Enlarged figure');
  var lbImg = document.createElement('img');
  lb.appendChild(lbImg);
  document.body.appendChild(lb);

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lb.classList.remove('is-open');
    lbImg.src = '';
    document.body.style.overflow = '';
  }
  lb.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
  Array.prototype.forEach.call(document.querySelectorAll('img.zoomable'), function (img) {
    img.addEventListener('click', function () {
      openLightbox(img.getAttribute('data-full') || img.src, img.alt);
    });
  });

  // ---- Simple carousels: <div class="carousel"> with .slide children ----
  Array.prototype.forEach.call(document.querySelectorAll('.carousel'), function (car) {
    var slides = car.querySelectorAll('.slide');
    if (!slides.length) return;
    var idx = 0;
    var nav = document.createElement('div');
    nav.className = 'carousel-nav';
    var prev = document.createElement('button');
    prev.className = 'button is-small is-rounded';
    prev.textContent = '← Previous';
    var next = document.createElement('button');
    next.className = 'button is-small is-rounded';
    next.textContent = 'Next →';
    var dots = document.createElement('div');
    dots.className = 'dots';
    var dotEls = [];
    Array.prototype.forEach.call(slides, function (_, i) {
      var d = document.createElement('button');
      d.className = 'dot';
      d.setAttribute('aria-label', 'Show trial ' + (i + 1));
      d.addEventListener('click', function () { show(i); });
      dots.appendChild(d);
      dotEls.push(d);
    });
    nav.appendChild(prev);
    nav.appendChild(dots);
    nav.appendChild(next);
    car.appendChild(nav);

    function show(i) {
      idx = (i + slides.length) % slides.length;
      Array.prototype.forEach.call(slides, function (s, j) {
        s.classList.toggle('is-active', j === idx);
      });
      dotEls.forEach(function (d, j) { d.classList.toggle('is-active', j === idx); });
    }
    prev.addEventListener('click', function () { show(idx - 1); });
    next.addEventListener('click', function () { show(idx + 1); });
    show(0);
  });
})();

(function () {
  'use strict';

  // Mobile nav
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  // Reduced motion: show everything, skip video layers
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    document.body.classList.add('no-video');
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-in');
    });
    return;
  }

  // Video fallback: if portrait video fails / can't play, show still
  var pVid = document.querySelector('.portrait-video');
  if (pVid) {
    var markFallback = function () {
      document.body.classList.add('no-video');
    };
    pVid.addEventListener('error', markFallback);
    pVid.addEventListener('stalled', function () {
      if (pVid.readyState < 2) markFallback();
    });
    // Ensure autoplay attempt
    var playPromise = pVid.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(markFallback);
    }
  }

  // Ambient video play soft-fail
  var aVid = document.querySelector('.atmosphere-video');
  if (aVid) {
    var ap = aVid.play();
    if (ap && typeof ap.catch === 'function') {
      ap.catch(function () { aVid.style.display = 'none'; });
    }
  }

  // Scroll reveals with staggered delay for siblings in a rail
  var reveals = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = el.parentElement
          ? Array.prototype.slice.call(el.parentElement.querySelectorAll(':scope > [data-reveal]'))
          : [];
        var idx = siblings.indexOf(el);
        var delay = idx > 0 ? Math.min(idx * 90, 360) : 0;
        window.setTimeout(function () {
          el.classList.add('is-in');
        }, delay);
        io.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );

  reveals.forEach(function (el) { io.observe(el); });

  // Soft parallax on hero portrait glow (desktop)
  var glow = document.querySelector('.portrait-glow');
  var hero = document.querySelector('.hero');
  if (glow && hero && window.matchMedia('(pointer: fine)').matches) {
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      var x = ((e.clientX - r.left) / r.width - 0.5) * 12;
      var y = ((e.clientY - r.top) / r.height - 0.5) * 8;
      glow.style.transform = 'translate(' + x.toFixed(1) + 'px, ' + y.toFixed(1) + 'px)';
    });
  }
})();

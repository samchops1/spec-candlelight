(function () {
  'use strict';

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

  var video = document.getElementById('scott-film');
  var cue = document.getElementById('play-cue');
  if (video && cue) {
    var hideCue = function () { cue.classList.add('is-hidden'); };
    var showCue = function () {
      if (video.paused) cue.classList.remove('is-hidden');
    };
    cue.addEventListener('click', function (e) {
      e.preventDefault();
      hideCue();
      var p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(function () { showCue(); });
      }
    });
    video.addEventListener('play', hideCue);
    video.addEventListener('playing', hideCue);
    video.addEventListener('pause', showCue);
    video.addEventListener('ended', showCue);
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nodes = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reduce || !('IntersectionObserver' in window)) {
    nodes.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });
  nodes.forEach(function (el) { io.observe(el); });
})();

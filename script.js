/* ============================================================
   Glow Cafe – script.js
   Lightweight, no-dependency JS:
   • Sticky nav shadow
   • Mobile nav toggle
   • Menu tabs
   • FAQ accordion
   ============================================================ */

(function () {
  'use strict';

  /* ── Sticky nav shadow ───────────────────────────────── */
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Mobile nav toggle ───────────────────────────────── */
  var navToggle = document.getElementById('navToggle');
  var primaryNav = document.getElementById('primary-nav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = primaryNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close nav when a link is clicked */
    primaryNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        primaryNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close nav on Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && primaryNav.classList.contains('open')) {
        primaryNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  /* ── Menu tabs ───────────────────────────────────────── */
  var tabs = document.querySelectorAll('.menu-tab');
  var panels = document.querySelectorAll('.menu-panel');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var targetId = 'tab-' + tab.dataset.tab;

      /* Deactivate all tabs */
      tabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      /* Hide all panels */
      panels.forEach(function (p) {
        p.hidden = true;
        p.classList.remove('active');
      });

      /* Activate clicked tab */
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      /* Show target panel */
      var panel = document.getElementById(targetId);
      if (panel) {
        panel.hidden = false;
        panel.classList.add('active');
      }
    });

    /* Keyboard navigation for tabs (arrow keys) */
    tab.addEventListener('keydown', function (e) {
      var tabList = Array.from(tabs);
      var idx = tabList.indexOf(tab);
      var next;

      if (e.key === 'ArrowRight') {
        next = tabList[(idx + 1) % tabList.length];
      } else if (e.key === 'ArrowLeft') {
        next = tabList[(idx - 1 + tabList.length) % tabList.length];
      } else if (e.key === 'Home') {
        next = tabList[0];
      } else if (e.key === 'End') {
        next = tabList[tabList.length - 1];
      }

      if (next) {
        e.preventDefault();
        next.click();
        next.focus();
      }
    });
  });

  /* ── FAQ accordion ───────────────────────────────────── */
  var faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answerId = btn.getAttribute('aria-controls');
      var answer = document.getElementById(answerId);
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      /* Toggle current item */
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      if (answer) {
        answer.hidden = isOpen;
      }
    });
  });

})();

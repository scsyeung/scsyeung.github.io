(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 2000
    });
  }

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });


  var header = $(hero);

  var backgrounds = new Array(
      'url("../img/me-bg-2.jpg")'
    , 'url("../img/me-bg.jpg")'
    , 'url("../img/me-bg-3.jpg")'
  );
      
  var current = 0;
  
  function nextBackground() {
      current++;
      current = current % backgrounds.length;
      header.css('background', backgrounds[current] + 'top center');
      header.css('background-size', 'cover');
      header.fadeIn(1000);
  }

  function changeBackgroundSmoothly() {
      header.fadeOut(1000, nextBackground);
  }
  
  setInterval(changeBackgroundSmoothly,5000);

  (function newFact() {
    var facts = [ 
    'When working at a financial regulator, Samuel was given 6 months to work on a VBA task (NO documentation provided). He managed to complete it in 4 days without any supervision.', 
    'Samuel completed his bachelor degree as the ONE & ONLY First Class Honor graduate in his major cohort.', 
    'As instructed by his supervisor to grade a Python assignment strictly, Samuel spotted out 15+ critical errors for each submission. The mean score before adjustment was almost "0".', 
    'With only 3 months of forensic experience, Samuel cracked the CISA exam.',
    'With only 11 months of forensic experience, Samuel cracked the CISSP exam.',
    'As a junior staff, Samuel was the ONLY member in the deartment to succssfully crack 2 professional examinations (CISSP, CISA).'];
    var randomFact = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerHTML += facts[randomFact];
  })();

})()


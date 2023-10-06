const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage () {
    const scrollPos = window.scrollY;

    if(scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && !scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp () {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {

            // Get count target
            const target = +counter.getAttribute('data-target');

            // Get current counter value
            const c = +counter.innerText;

            // Incrementing numbers
            const increment = target / 100;

            // If counter is less than target, add increment
            if (c < target) {
                // Round up and set counter value
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 75);
            } else {
                counter.innerText = target;
            }

        };
        updateCounter();
    });
}

function reset() {
    counters.forEach((counter) => counter.innerHTML = '0');
}
/* Function for dynamic word changing */

(function () {
    var words = [
        "Fly",
        "Soar",
        "Glide",
        "Go",
        "We are Airbus"
      ],
      i = 0;
    setInterval(function () {
      $("#dynamicWords").fadeOut(function () {
        $(this)
          .html(words[(i = (i + 1) % words.length)])
          .fadeIn();
      });
    }, 2000);
})();

/* Animations on scroll */

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('image-animation');
    }
  });
});
  
const viewbox = document.querySelectorAll('.section-content');
  viewbox.forEach(image => {
    observer.observe(image);
});


/* JQuery */
$(document).ready(function() {
  
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
    /* Check the location of each desired element */
    $('.hideme').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},500);
                
        }
        
    }); 
  
  });
  
});
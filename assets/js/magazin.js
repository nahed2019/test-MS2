function myFunction(x) {
  if (x.matches) { // If media query matches
    function myFunction() {
  document.getElementsByClassName("mob-img").style.disply = block;
}

  } else {
   
  

$('p').removeClass("col").addClass("slide-in from-left"); 
 $('img').removeClass("col").addClass("slide-in from-right");  

const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
}
}
var x = window.matchMedia("(max-width: 500px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)
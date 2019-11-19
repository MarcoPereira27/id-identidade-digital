var controller = new ScrollMagic.Controller();
var animateIn = new TimelineMax();
var animateServices = new TimelineMax();

const navbar = document.querySelector("nav");

animateIn.from(".about-item", {
  opacity: 0,
  duration: 1,
  y: -50,
  stagger: 0.6
});

animateServices.from(".card", {
  opacity: 0,
  duration: 1,
  y: -50,
  stagger: 0.6
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#about-container"
})

  .setTween(animateIn)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#services-container"
})

  .setTween(animateServices)
  .addTo(controller);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add("bs-add");
  }

  if (window.pageYOffset > 521) {
    navbar.classList.add("sticky-nav");
  } else if (window.pageYOffset < 522) {
    navbar.classList.remove("sticky-nav");
  }
});

// setInterval(() => {
//   console.log(window.pageYOffset);
// }, 500);

var controller = new ScrollMagic.Controller();
var animateIn = new TimelineMax();

const navbar = document.querySelector("nav");

animateIn.from(".about-item", {
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

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add("bs-add");
  }
});

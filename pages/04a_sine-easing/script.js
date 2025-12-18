import { gsap } from "gsap";

const scrollBtn = document.querySelector(".scroll-to-top");
let isFloating = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    if (!isFloating) {
      scrollBtn.classList.add("show");

      gsap.to(scrollBtn, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.out'
      });

      isFloating = true;
    }
  } else if (isFloating) {
    scrollBtn.classList.remove("show");

    isFloating = false;
  }
});

// on hover
scrollBtn.addEventListener('mouseenter', () => {
    gsap.to(scrollBtn, {
        scale: 1.2,
        duration: 0.2
    })
})

scrollBtn.addEventListener('mouseleave', () => {
    gsap.to(scrollBtn, {
        scale: 1,
        duration: 0.2
    })
})

// on click
scrollBtn.addEventListener('click', () => {
    window.scrollTo(0,0)
})